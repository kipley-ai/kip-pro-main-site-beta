import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type ExternalApiResponse = {
    return_code: number;
    return_info: string;
    data: {
        code_list: {
            invite_code: string;
            created_time: string;
            valid_start: string;
            valid_end: string;
        }[];
        code_count: number;
    };
    server_time: number;
};

type RequestBody = {
    wallet_address: string;
};

const getCodes = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        const { wallet_address }: RequestBody = req.body;

        // Check if wallet_address is provided
        if (!wallet_address) {
            res.status(400).json({ error: "Wallet address is required" });
            return;
        }

        try {
            // Make a POST request to the external API
            const response = await axios.post<ExternalApiResponse>(
                "https://kb-platform-test.kipley.ai/get_wallet_codes",
                {
                    wallet_address,
                },
            );

            // Check if code_list is empty
            if (response.data.data.code_list.length === 0) {
                res.status(404).json({ error: "No codes found" });
                return;
            }

            // Send back the code list
            res.status(200).json(response.data.data.code_list);
        } catch (error) {
            // Handle any errors from the external API
            res.status(500).json({
                error: "Error contacting the external API",
            });
        }
    } else {
        // Handle non-POST requests
        res.setHeader("Allow", "POST");
        res.status(405).json({ error: "Method Not Allowed" });
    }
};

export default getCodes;

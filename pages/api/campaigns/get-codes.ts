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

        if (!wallet_address) {
            res.status(400).json({ error: "Wallet address is required" });
            return;
        }

        try {
            const response = await axios.post<ExternalApiResponse>(
                `${process.env.NEXT_PUBLIC_API_URL}/get_wallet_codes`,
                {
                    wallet_address,
                },
            );

            res.status(200).json(response.data.data.code_list);
        } catch (error) {
            res.status(500).json({
                error: "Error contacting the external API.",
            });
        }
    } else {
        res.setHeader("Allow", "POST");
        res.status(405).json({ error: "Method Not Allowed" });
    }
};

export default getCodes;

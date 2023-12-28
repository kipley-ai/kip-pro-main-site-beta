import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type ExternalApiResponse = {
    return_code: number;
    return_info: string;
    data: {
        is_ok: boolean;
        message: string;
    };
    server_time: number;
};

type RequestBody = {
    wallet_address: string;
    invitation_code: string;
};

const validateCodeHandler = async (
    req: NextApiRequest,
    res: NextApiResponse,
) => {
    if (req.method === "POST") {
        const { wallet_address, invitation_code }: RequestBody = req.body;

        // Check if wallet_address and invitation_code are provided
        if (!wallet_address || !invitation_code) {
            res.status(400).json({
                error: "Wallet address and invitation code are required",
            });
            return;
        }

        try {
            // Make a POST request to the external API
            const response = await axios.post<ExternalApiResponse>(
                "https://kb-platform-test.kipley.ai/whitelist_wallet_activate",
                {
                    wallet_address,
                    invitation_code,
                },
            );

            // Send back the response from the external API
            const data = response.data
            if (data.data.is_ok) {
              res.status(200).json(response.data);
            } else {
              res.status(400).json(response.data);
            }
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

export default validateCodeHandler;

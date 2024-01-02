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

        if (!wallet_address) {
            res.status(401).json({
                is_ok: false,
                message: "Please connect your wallet first.",
            });
            return;
        }

        if (!invitation_code) {
            res.status(400).json({
                is_ok: false,
                message: "Invite code is empty.",
            });
            return;
        }

        try {
            const response = await axios.post<ExternalApiResponse>(
                `${process.env.NEXT_PUBLIC_API_URL}/whitelist_wallet_activate`,
                {
                    wallet_address,
                    invitation_code,
                },
            );

            if (response.data.data.is_ok) {
                res.status(200).json(response.data.data);
            } else {
                switch (response.data.data.message) {
                    case "Invitation code not found.":
                        res.status(404).json({
                            is_ok: false,
                            message: "Invite code not found.",
                        });
                        break;
                    case "Invitation code has been used.":
                        res.status(400).json({
                            is_ok: false,
                            message: "Invite code has been used.",
                        });
                        break;
                    case "Invitation code has been expired.":
                        res.status(400).json({
                            is_ok: false,
                            message: "Invite code has expired.",
                        });
                        break;
                    default:
                        res.status(400).json(response.data.data);
                }
            }
        } catch (error) {
            res.status(500).json({
                is_ok: false,
                message: "Error contacting the external API.",
            });
        }
    } else {
        res.setHeader("Allow", "POST");
        res.status(405).json({ error: "Method Not Allowed" });
    }
};

export default validateCodeHandler;

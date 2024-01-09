import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type ExternalApiResponse = {
    return_code: number,
    return_info: string,
    data: {
        ranking_list: {
            wallet_address: string,
            points: number,
            rank: number,
            date: string,
            created_time: string,
        }
        code_count: number
    },
    server_time: number
}

type RequestBody = {
    page: number,
    page_size: number,
    wallet_address: string
};

const getLeaderboardRankings = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        const { page, page_size, wallet_address }: RequestBody = req.body;
        try {
            const response = await axios.post<ExternalApiResponse>(
                `${process.env.NEXT_PUBLIC_API_URL}/get_leaderboard_rankings`,
                {
                    page,
                    page_size,
                    wallet_address
                },
            );
            res.status(200).json(response.data.data);
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: "Error contacting the external API. :V",
            });
        }
    } else {
        res.setHeader("Allow", "POST");
        res.status(405).json({ error: "Method Not Allowed" });
    }
};

export default getLeaderboardRankings;
import type { NextApiRequest, NextApiResponse } from "next";
import { Network, Alchemy } from "alchemy-sdk";

export default async function get(req: NextApiRequest, res: NextApiResponse) {
    const { address } = req.query;

    const settings = {
        apiKey: process.env.ALCHEMY_API_KEY,
        network: process.env.ALCHEMY_NETWORK as Network,
    };

    const alchemy = new Alchemy(settings);

    // get all NFTs owned by the provided address or ENS domain
    const result = await alchemy.nft.getNftsForOwner(address as string);

    return res.json(result);
}

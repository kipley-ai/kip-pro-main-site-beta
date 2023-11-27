import type { NextApiRequest, NextApiResponse } from "next";
import { supabaseSecretClient } from "@/utils/supabase";

export default async function post(req: NextApiRequest, res: NextApiResponse) {
  const { address } = req.body;

  let { data: wallet } = await supabaseSecretClient
    .from("wallet")
    .select("*")
    .eq("address", address);

  if (!wallet?.length) {
    await supabaseSecretClient.from("wallet").insert({ address });
  }

  res.status(200);
}

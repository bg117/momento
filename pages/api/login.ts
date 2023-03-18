import { NextApiRequest, NextApiResponse } from "next";

export default async function login(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  res
    .status(200)
    .setHeader("Set-Cookie", `username=Guest; path=/`) // random username cookie
    .json({ message: "Hello" });
}

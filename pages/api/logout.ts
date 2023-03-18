import { NextApiRequest, NextApiResponse } from "next";

export default async function logout(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  res
    .status(200)
    .setHeader("Set-Cookie", `username=; path=/; Max-Age=0`) // clear username cookie
    .json({ message: "Hello" });
}

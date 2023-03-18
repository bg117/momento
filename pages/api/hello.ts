// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type JsonResponse = {
  message: string;
  data?: any;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<JsonResponse>
) {
  res.status(403).json({
    message: "You are not allowed to access this resource",
  });
}

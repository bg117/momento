import { NextApiRequest, NextApiResponse } from "next";

export default async function subjects(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
    // reply with list of subjects for the given quarter
    const quarter = req.query.quarter;
    const subjects = [
        { id: 1, name: "Math" },
        { id: 2, name: "English" },
        { id: 3, name: "Science" },
        { id: 4, name: "MAPEH" },
        { id: 5, name: "Filipino" },
        { id: 6, name: "ESP" },
        { id: 7, name: "ICT" },
        { id: 8, name: "Araling Panlipunan" },
    ];

    res.status(200).json(subjects);
}

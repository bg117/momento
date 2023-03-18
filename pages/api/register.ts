// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type RegistrationData = {
  email: string;
  schoolEmail?: string;
  name: string;
  dateOfBirth: string;
};

export default async function register(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  /*
  if (req.method === "POST") {
    const data: RegistrationData = JSON.parse(req.body);
    const temp = generatePassword();

    try {
      const user = await prisma.user.create({
        data: {
          email: data.email,
          schoolEmail: data.schoolEmail,
          name: data.name,
          dateOfBirth: new Date(data.dateOfBirth).toISOString(),
          password: Buffer.from(temp),
        },
      });

      res.status(200).json(user);
    } catch (e) {
      if (!(e instanceof Prisma.PrismaClientKnownRequestError)) {
        throw e;
      }
      const meta = e.meta as { target: string[] };
      switch (e.code) {
        case "P2002":
          if (meta.target.includes("email")) {
            res.status(400).json({ error: "Email already in use" });
          } else if (meta.target.includes("schoolEmail")) {
            res.status(400).json({ error: "School email already in use" });
          }
          break;
        default:
          res.status(500).json({ error: "Internal server error " + e.code });
          break;
      }
    }
  } else {
    res.status(404).json({ error: "Not found" });
  }
  */

  res.status(200).json({ message: "Hello" });
}

function generatePassword() {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let password = "";

  for (let i = 0; i < 10; i++) {
    password += charset[Math.floor(Math.random() * charset.length)];
  }

  return password;
}

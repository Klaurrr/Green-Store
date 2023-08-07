import { hash } from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";

import User from "@/models/user";

import { connectToMongoDB } from "../../../../lib/mongodb";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
      connectToMongoDB().catch((err) => res.json(err));

      if (req.method === "POST") {
            if (!req.body) return res.status(400).json({ error: "Data is missing" });

            const { email, password } = req.body;

            const userExists = await User.findOne({ email });

            if (userExists) {
                  return res.status(409).json({ error: "User already exists" });
            } else {
                  if (!password) {
                        return res.status(409).json({ error: "Password is required" });
                  }
                  const hashedPassword = await hash(password, 12);

                  try {
                        User.create({
                              email,
                              password: hashedPassword,
                        });
                  } catch (error) {
                        return res.status(409).json({ error: error });
                  }

                  const user = {
                        email,
                        password: hashedPassword,
                  };

                  return res.status(201).json({
                        success: true,
                        user,
                  });
            }
      } else {
            return res.status(405).json({ error: "Method Not Allowed" });
      }
};

export default handler;

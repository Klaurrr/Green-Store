/* eslint-disable new-cap */
import { compare, hash } from "bcrypt";
import type { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import YandexProvider from "next-auth/providers/yandex";

import User from "@/models/user";

import { connectToMongoDB } from "../../lib/mongodb";

export const authConfig: AuthOptions = {
      providers: [
            YandexProvider({
                  clientId: process.env.YANDEX_CLIENT_ID!,
                  clientSecret: process.env.YANDEX_SECRET!,
            }),
            Credentials({
                  credentials: {
                        email: { label: "email", type: "email", required: true },
                        password: { label: "password", type: "password", required: true },
                  },
                  async authorize(credentials) {
                        if (!credentials?.email || !credentials?.password) return null;

                        await connectToMongoDB().catch((err) => {
                              throw new Error(err);
                        });

                        const user = await User.findOne({
                              email: credentials?.email,
                        }).select("+password");

                        if (!user) {
                              throw new Error("Invalid credentials");
                        }

                        if (user) {
                              const { password, ...userWithoutPass } = user;

                              const isPasswordCorrect = await compare(
                                    credentials.password,
                                    password
                              );

                              if (isPasswordCorrect) {
                                    return userWithoutPass as any;
                              } else {
                                    throw new Error("Invalid credentials");
                              }
                        }
                  },
            }),
      ],
      pages: {
            signIn: "/Home",
      },
};

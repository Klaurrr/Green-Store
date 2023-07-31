/* eslint-disable new-cap */
import type { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import YandexProvider from "next-auth/providers/yandex";

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

                        // Тут какую-нибудь базу надо подключить и оттуда user подтягивать
                        const currentUser = [
                              {
                                    email: "UsachevDev@yandex.ru",
                                    password: "qwerty1234",
                              },
                        ].find((user) => user.email === credentials.email);

                        if (currentUser && currentUser.password === credentials.password) {
                              const { password, ...userWithoutPass } = currentUser;

                              return userWithoutPass as any;
                        }

                        return null;
                  },
            }),
      ],
      // pages: {
      //       signIn: "/Home",
      // },
};

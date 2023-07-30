import NextAuth from "next-auth/next";

import { authConfig } from "@/configs/auth";

// eslint-disable-next-line new-cap
const handler = NextAuth(authConfig);

export default handler;

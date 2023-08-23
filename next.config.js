/** @type {import('next').NextConfig} */

module.exports = {
      webpack(config) {
            config.module.rules.push({
                  test: /\.svg$/,
                  use: ["@svgr/webpack"],
            });

            return config;
      },
      env: {
            YANDEX_CLIENT_ID: process.env.YANDEX_CLIENT_ID,
            YANDEX_SECRET: process.env.YANDEX_SECRET,
            NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
            NEXTAUTH_URL: process.env.NEXTAUTH_URL,
            MONGODB_URI: process.env.MONGODB_URI,
            PLANTS_URL: process.env.PLANTS_URL,
            SIGNUP: process.env.SIGNUP,
      },
      async headers() {
            return [
                  {
                        source: "/api/:path*",
                        headers: [
                              { key: "Access-Control-Allow-Credentials", value: "true" },
                              { key: "Access-Control-Allow-Origin", value: "*" },
                              {
                                    key: "Access-Control-Allow-Methods",
                                    value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
                              },
                              {
                                    key: "Access-Control-Allow-Headers",
                                    value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
                              },
                        ],
                  },
            ];
      },
};

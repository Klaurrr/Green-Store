/** @type {import('next').NextConfig} */

// const withImages = require("next-images");
// const withSvgr = require("next-svgr");

// const nextConfig = {
//       reactStrictMode: true,
// };

// module.exports = nextConfig;

// module.exports = withImages(
//       withSvgr({
//             webpack(config, options) {
//                   return config;
//             },
//       })
// );

module.exports = {
      webpack(config) {
            config.module.rules.push({
                  test: /\.svg$/,
                  use: ["@svgr/webpack"],
            });

            return config;
      },
};

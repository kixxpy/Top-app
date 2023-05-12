/** @type {import('next').NextConfig} */
const nextConfig = {
  //whatever config you have
  //...
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

// eslint-disable-next-line no-undef
module.exports = nextConfig;
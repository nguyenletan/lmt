/** @type {import('next').NextConfig} */
const config = {
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.tina.io",
        port: "",
      },
    ],
  },
  async headers() {
    // these are also defined in the root layout since github pages doesn't support headers
    const headers = [
      {
        key: "X-Frame-Options",
        value: "SAMEORIGIN",
      },
      {
        key: "Content-Security-Policy",
        value: "frame-ancestors 'self'",
      },
    ];
    return [
      {
        source: "/(.*)",
        headers,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/admin",
        destination: "/admin/index.html",
      },
    ];
  },
};

module.exports = config;

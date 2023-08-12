/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
    typedRoutes: true,

  },
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          {
            key: "Access-Control-Allow-Origin",
            value: "www.tippernetwork.com",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        // hostname: "zluncbhyhpxonqhigbhn.supabase.co",
        // port: "",
        // pathname: "/storage/v1/object//**",
      },
    ],
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
    };

    return config;
  },
};

module.exports = nextConfig;

// zluncbhyhpxonqhigbhn.supabase.co

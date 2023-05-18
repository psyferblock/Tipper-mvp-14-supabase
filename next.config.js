/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "zluncbhyhpxonqhigbhn.supabase.co",
        port: "",
        pathname: "/storage/v1/object/**",
      },
    ],
  },
  //   compiler: {
  //   reactStrictMode: true,
  //   styledComponents: true,
  // },
  experimental: {
    appDir: true,
  },

  // future: {
  //   webpack5: true
  // },
  // webpack: function (config, options) {
  //   console.log(options.webpack.version); // 4.44.1
  //   config.experiments = {};
  //   return config;
  // },
  // experiments: {
  //   outputModule: true,
  //   syncWebAssembly: true,
  //   topLevelAwait: true,
  //   asyncWebAssembly: true,
  //   layers: true,
  //   lazyCompilation: true,
  // },
};

module.exports = nextConfig;

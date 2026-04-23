import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Canonicalize host: if you later add `www.azharplastics.com`, redirect it to the apex.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.azharplastics.com" }],
        destination: "https://azharplastics.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

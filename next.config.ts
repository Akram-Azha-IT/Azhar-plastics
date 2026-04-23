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
      { source: "/index.php", destination: "/", permanent: true },
      { source: "/en/index.php", destination: "/en", permanent: true },
      { source: "/fr/index.php", destination: "/fr", permanent: true },
      { source: "/ar/index.php", destination: "/ar", permanent: true },
      { source: "/de/index.php", destination: "/de", permanent: true },
    ];
  },
};

export default nextConfig;

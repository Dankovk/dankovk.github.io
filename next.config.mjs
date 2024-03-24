/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aceternity.com",
        port: "",
        pathname: "images/products/thumbnails/new",
      },
    ],
  },
  output: "export",
};

export default nextConfig;

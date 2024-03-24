/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: "export",
  distDir: "dist",
  cleanDistDir: true,
};

export default nextConfig;

/** @type {import('next').NextConfig} */
// Next.js config for Top Cut Landscaping.
// We allow Instagram CDN remote images so the IG strip on home can render
// real route photos when an INSTAGRAM_ACCESS_TOKEN is provided.
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scontent.cdninstagram.com",
      },
      {
        protocol: "https",
        hostname: "**.cdninstagram.com",
      },
      {
        protocol: "https",
        hostname: "**.fbcdn.net",
      },
    ],
  },
};

export default nextConfig;

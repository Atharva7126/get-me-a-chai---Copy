/** @type {import('next').NextConfig} */
const nextConfig = {
    devIndicators: false,
    eslint: {
        ignoreDuringBuilds: true,  // ✅ correct placement
    },
};

export default nextConfig;

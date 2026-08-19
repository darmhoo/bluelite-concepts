/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/pet-bottles", destination: "/services#pet-bottles", permanent: true },
      { source: "/pet-flakes", destination: "/services#pet-flakes", permanent: true },
      { source: "/pet-shredding", destination: "/services#pet-shredding", permanent: true },
      { source: "/pet-washing", destination: "/services#pet-washing", permanent: true },
    ];
  },
};

module.exports = nextConfig;

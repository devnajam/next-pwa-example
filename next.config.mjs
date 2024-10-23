/** @type {import('next').NextConfig} */

import nextPWA from "next-pwa";

const withPWA = nextPWA({
  dest: "public",
  register: true,
});

const nextConfig = {};

export default withPWA(nextConfig);

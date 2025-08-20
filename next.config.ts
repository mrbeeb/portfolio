
import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    runtime: 'nodejs', // enables Netlify plugin to handle prerendered pages & forms
  },
};

export default nextConfig;

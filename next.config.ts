import type { NextConfig } from 'next';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const sitesRuntimeBuild = process.env.SITES_BUILD === '1';

const nextConfig: NextConfig = {
  output: sitesRuntimeBuild ? undefined : 'export',
  trailingSlash: !sitesRuntimeBuild,
  basePath,
  assetPrefix: basePath,
};

export default nextConfig;

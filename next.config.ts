const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // 在构建时忽略 ESLint 错误
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true, // 禁用类型检查
  },
  webpack: (config: any) => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding')
    return config
  },
}

export default nextConfig

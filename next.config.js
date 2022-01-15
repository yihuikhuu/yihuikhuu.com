/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  async headers() {
    let csp = `default-src 'self'; script-src 'self'`
    if (process.env.NODE_ENV !== 'production') {
      csp = `style-src 'self' 'unsafe-inline'; font-src 'self' data:; default-src 'self'; script-src 'unsafe-eval' 'self'`
    }
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: csp
          }
        ],
      },
    ]
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config');

const nextConfig = {
  i18n,
  compiler: {
    styledComponents: {
      fileName: false,
    },
  },
  reactStrictMode: true,
};

module.exports = nextConfig;

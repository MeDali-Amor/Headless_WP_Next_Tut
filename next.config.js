/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
    trailingSlash: false,
    // reactStrictMode: true,
    // swcMinify: true,
    webpackDevMiddleware: (config) => {
        config.watchOptions = {
            poll: 1000,
            aggregateTimeout: 300,
        };

        return config;
    },
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
};

module.exports = nextConfig;

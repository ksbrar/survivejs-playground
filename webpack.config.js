require('dotenv').config();

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack demo",
        }),
    ],

    devServer: {
        stats: "errors-only",
        overlay: true,

        host: process.env.host,
        port: process.env.ENV_PORT,
        open: true,
    }
};
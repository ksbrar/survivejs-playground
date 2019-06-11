// Top-level imports:
const webpack = require("webpack");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const dotenv = require("dotenv");

// Parts imports:
const parts_devServer = require("./webpack.parts.devServer");

// Use .env file for initialization:
dotenv.config();

const commonParts = merge([
    {
        plugins: [
            new HtmlWebpackPlugin({
                title: "Webpack demo y'all",
            })
        ]
    }
])

const productionConfig = merge([]);

const developmentConfig = merge([
    parts_devServer.devServer({
        // `process` is exposed as a global by Node, but we will stick to using local env. vars. here!
        host: dotenv.ENV_HOST,
        port: dotenv.ENV_PORT,
    })
])

module.exports = mode => {
    if (mode === "prod") {
        return merge(commonParts, productionConfig, { mode });
    }

    return merge(commonParts, developmentConfig, { mode });
}
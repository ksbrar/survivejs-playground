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
        host: localhost,
        port: 8082,
    })
])

module.exports = mode => {
    if (mode === "prod") {
        return merge(commonParts, productionConfig, { mode });
    }

    return merge(commonParts, developmentConfig, { mode });
}
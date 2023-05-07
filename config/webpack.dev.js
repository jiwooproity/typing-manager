const { merge } = require("webpack-merge");
const common = require("./webpack.common");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        open: false,
        hot: true,
        compress: true,
        port: 3000,
        historyApiFallback: true,
        liveReload: true,
    },
    output: {
        filename: "bundle.[contenthash].js",
        publicPath: "/",
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin()
    ]
})
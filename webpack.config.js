const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
    entry: {
        app: ["./src/index.tsx"],
        vendor: ["react", "react-dom"]
    },
    devtool: "inline-source-map",
    output: {
        filename: "[name].js",
        publicPath: "/dist/",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        port: 8000,
        open: true,
        watchContentBase: true,
        writeToDisk: true,
        compress: true,
        historyApiFallback: true,
        contentBase: path.join(__dirname, "dist")
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                enforce: "pre",
                loader: "source-map-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            title: "Book Header Widgets",
            version: JSON.stringify(require("./package.json").version),
            inject: "body"
        })
    ]
};

module.exports = config;

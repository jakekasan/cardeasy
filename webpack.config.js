const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: path.join(__dirname, "./src/react/index.js"),
    output: {
        filename: "output.js",
        path: path.join(__dirname, "./public/html")
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/react/index.html",
            filename: path.join(__dirname,"public/html/index.html")
        })
    ]
};
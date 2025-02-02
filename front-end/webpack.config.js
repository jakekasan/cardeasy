const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: path.join(__dirname, "./src/react/index.jsx"),
    output: {
        filename: "index.js",
        path: path.join(__dirname, "./public/html")
    },
    resolve: {
        extensions: [ ".jsx", ".js" ]
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
                test: /\.(scss|sass|css)/,
                use: [
                    {
                        loader: "style-loader"
                    }, 
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
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
    devServer: {
        historyApiFallback: true,
        proxy: {
            "/api": "http://localhost:6666"
        },
        publicPath: "/",
        hot: true
     },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/react/index.html",
            filename: path.join(__dirname,"public/html/index.html")
        })
    ]
};
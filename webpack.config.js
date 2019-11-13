const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: "./src/js/index.js",
    output:{
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        })
    ]
};
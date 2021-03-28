const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './App/app.js',
        Video: './App/Video/ClassVideo.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './App',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({
            title: 'Development',
        }),
    ],
    output: {
        filename: 'bundle.[name].js',
        path: path.resolve(__dirname, './App/js/dist'),
    },
};
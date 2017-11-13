var webpack = require('webpack');
var path = require('path');
var Nyan = require('nyan-progress-webpack-plugin');
var WebpackDevServer = require('webpack-dev-server');
var WebpackDevMiddleware = require("webpack-dev-middleware");
var openBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: './examples/lib/index.js',
    output: {
        path: path.resolve(__dirname, 'examples/lib'),
        filename: 'index.js'
    },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }, {
            test: /\.(less|css)?$/,
            loader: 'style-loader!css-loader!less-loader'
        }]
    },
    devServer: {
        contentBase: "./examples",
        historyApiFallback: true,
        inline: true,
    },
    plugins: [
        new Nyan(),
        new webpack.HotModuleReplacementPlugin(),
        new openBrowserPlugin({
            url: 'http://localhost:8080'
        })
    ]
};
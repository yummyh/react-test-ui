var webpack = require('webpack');
var path = require('path');
var Nyan = require('nyan-progress-webpack-plugin');
var WebpackDevServer = require('webpack-dev-server');
var WebpackDevMiddleware = require("webpack-dev-middleware");
// const openBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: './examples/lib/index.js',
    output: {
        path: path.resolve(__dirname, 'examples'),
        filename: 'index.js'
    },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }, {
            test: /\.(less|css)?$/,
            use: 'style-loader!css-loader!less-loader'
        }, {
            test: /\.(svg|ttf|eot|svg|woff(\(?2\)?)?)(\?[a-zA-Z_0-9.=&]*)?(#[a-zA-Z_0-9.=&]*)?$/,
            use: "file-loader?name=./fonts/[name].[ext]"
        }]
    },
    devServer: {
        contentBase: "./examples",
        historyApiFallback: true,
        inline: true,
    },
    plugins: [
        new Nyan(),
        new webpack.HotModuleReplacementPlugin()
    ]
};
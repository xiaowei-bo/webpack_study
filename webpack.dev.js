const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const chalk = require('chalk');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const config = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 9001,
        hot: true
    },
    output: {
        publicPath: '/'
    },
    mode: "development",
    plugins: [
        new ProgressBarPlugin({
            format: ` ٩(๑❛ᴗ❛๑)۶ build [:bar] ${chalk.green.bold(':percent')}  (:elapsed 秒)`,
            complete: '-',
            clear: false
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
});

module.exports = config;

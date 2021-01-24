const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const chalk = require('chalk');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const config = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 9001,
        hot: true,
        open: true
    },
    output: {
        publicPath: '/'
    },
    mode: "development",
    plugins: [
        new ProgressBarPlugin({
            format: ` ٩(๑❛ᴗ❛๑)۶ build [:bar] ${chalk.green.bold(':percent')}  (:elapsed 秒)`,
            complete: '-',
            clear: true
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
});

module.exports = config;

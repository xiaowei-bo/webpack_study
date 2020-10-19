const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();


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
        new webpack.HotModuleReplacementPlugin()
    ]
});

module.exports = smp.wrap(config);

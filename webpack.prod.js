const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();

const config = merge(common, {
    mode: "production",
    plugins: [
        new CleanWebpackPlugin()
    ]
});

module.exports = smp.wrap(config);

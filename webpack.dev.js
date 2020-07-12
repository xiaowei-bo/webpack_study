const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');


module.exports = merge(common, {
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
        // new webpack.DefinePlugin({
        //     'process.env.NODE_ENV': JSON.stringify('dev')
        // }),
        new webpack.HotModuleReplacementPlugin()
    ]
});

const common = require('./webpack.common'),
terserWebpackPlugin = require('terser-webpack-plugin');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
    mode: "development",
    devtool: "source-map",
    optimization: {
        minimizer: [
            new terserWebpackPlugin({
                parallel: true
            })
        ]
    }
})
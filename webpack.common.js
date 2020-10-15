const Path = require('path'),
    htmlWebpackPlugin = require('html-webpack-plugin'),
    multi = require('multi-loader');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        'xerini': Path.resolve(__dirname, 'index.jsx')
    },
    output: {
        filename: '[name].bundle.js',
        path: Path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: { loader: "babel-loader" }
            },
            {
                test: /\.css$/,
                use: {
                    loader: multi('style-loader!css-loader')
                }
            },
            {
                test: /\.html$/,
                use: { loader: 'html-loader' }
            }
        ]
    },
    resolve: {
        extensions: ['.jsx', '.js', '.json']
    },
    plugins: [
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({ template: Path.resolve(__dirname, 'public', 'index.html') })
    ]
}
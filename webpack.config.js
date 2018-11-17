const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const outputDirectory = 'dist';

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, outputDirectory),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    },
    devServer: {
        port: 3000,
        open: true,
        proxy: {
            '/api': 'http://localhost:8080'
        }
    },
    plugins: [
        new CleanWebpackPlugin([outputDirectory]),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon: './public/favicon.ico'
        }),
        new CopyWebpackPlugin([{
            context: './public',
            from: '*.*'
        }]),
        new SWPrecacheWebpackPlugin({
            staticFileGlobs: [
                path.join(path.resolve(__dirname, './build'), '**/*')
            ],
            logger: function () { },
            filename: 'sw.js'
        })
    ]
};

const WebpackNotifierPlugin = require('webpack-notifier');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['ts-loader', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'to-string-loader', 'css-loader',
                ],
            }
        ]
    },
    entry: {
        main: './src/main.ts'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            })
    ]
};

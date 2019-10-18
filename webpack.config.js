let path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');




let conf = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: 'main.js',
        publicPath: '/',
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ["@babel/plugin-transform-react-jsx",
                            "@babel/plugin-proposal-class-properties"]
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                  'style-loader',
                  MiniCssExtractPlugin.loader,
                  {
                    loader: 'css-loader'
                  }, {
                    loader: 'sass-loader'
                  }
                ]
              },
            {
                test: /\.css$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: "[file].map"
        }),
        new MiniCssExtractPlugin({
            filename: "style.css",
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: './src/index.html',
            filename: 'index.html',
        }),
    ],

}

module.exports = conf;
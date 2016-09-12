const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js'); //提取公共脚本
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const path = require('path');
const srcPath = './app';
const buildPath = '/build';

module.exports = {
    devtool: 'eval-source-map',

    entry: {
        index: __dirname + "/app/js/main.js",
        search: __dirname + "/app/js/search.js"
    },
    output: {
        path: __dirname + buildPath,
        filename: "[name]-[hash].js"
    },

    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            },

            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            },
            {
                test: require.resolve('jquery'),
                loader: 'expose?jQuery!expose?$'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'image-webpack'
                ]
            }
        ]
    },

    vue: {
        loaders: {
            js: 'babel'
        }
    },

    postcss: [
        require('autoprefixer')
    ],

    sassLoader: {
        includePaths: [path.resolve(__dirname, srcPath)]
    },

    imageWebpackLoader: {
        pngquant: {
            quality: "65-90",
            speed: 4
        },
        jpegtran: {
            progressive: false
        }
    },


    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: __dirname + "/app/index.tmpl.html",
            excludeChunks: ['search']
        }),
        new HtmlWebpackPlugin({
            filename: "search.html",
            template: __dirname + "/app/search.tmpl.html",
            excludeChunks: ['index']
        }),
        new webpack.HotModuleReplacementPlugin(), //热加载插件
        new ExtractTextPlugin("[name]-[hash].css"),
        commonsPlugin,
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new FaviconsWebpackPlugin('./app/assets/icon/logo.png')
    ],

    devServer: {
        contentBase: './public',
        colors: true,
        historyApiFallback: true,
        inline: true,
        hot: true
    }
}
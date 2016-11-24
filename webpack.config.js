const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js'); //提取公共脚本
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const path = require('path');
const srcPath = './src';
const buildPath = '/build';

module.exports = {
    devtool: 'eval-source-map',

    entry: {
        index: __dirname + "/src/main/main.js",
        search: __dirname + "/src/main/search.js"
    },
    output: {
        path: __dirname + buildPath,
        filename: "[name]-[hash].js"
    },

    resolve: {
        root: path.resolve(__dirname, './src'),
        alias: {
            "~src": path.resolve(__dirname, './src'),
            "src": path.resolve(__dirname, './src'),
            "root": path.resolve(__dirname, './src'),
            "~widget": path.resolve(__dirname, './src/main/component/widget'),
            "~view": path.resolve(__dirname, './src/main/component/view'),
            "~vuex": path.resolve(__dirname, './src/main/vuex'),
            "~img": path.resolve(__dirname, './src/assets/img'),
        }
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
        template: __dirname + "/src/index.tmpl.html",
        excludeChunks: ['search']
    }),
    new HtmlWebpackPlugin({
        filename: "search.html",
        template: __dirname + "/src/search.tmpl.html",
        excludeChunks: ['index']
    }),
        new webpack.HotModuleReplacementPlugin(), //热加载插件
        new ExtractTextPlugin("[name]-[hash].css"),
        commonsPlugin,
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new FaviconsWebpackPlugin('./src/assets/icon/logo.png')
        ],

        devServer: {
            contentBase: './public',
            colors: true,
            historyApiFallback: true,
            inline: true,
            hot: true
        }
    }
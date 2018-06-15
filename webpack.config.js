/*********************************************************************
 * Created by deming-su on 2017/12/30
 *********************************************************************/

const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ChunkCleanPlugin = require("./ChunkCleanPlugin");

module.exports = {
    entry: {
        "all.min": "./devPkg/main.ts"
    },

    output: {
        path: path.join(__dirname, './static'),
        publicPath: '/static/',
        filename: '[name].js',
        chunkFilename: "[name].[hash:8].js"
    },
    
    resolve: {
        extensions: ['.js', '.vue', '.json', '.ts', '.css']
    },

    module: {
        noParse: /es6-promise\.js$/,

        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },

            {
                test: /\.less$|\.css$/,
                include: [path.resolve(__dirname, "devPkg"), path.resolve(__dirname, "node_modules/lensyn-ui")],
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'less-loader'
                    ]
                })
            },

            {
                test: /\.ts$/,
                loader: 'ts-loader',
                include: [path.resolve(__dirname, "devPkg")],
                options: {
                  appendTsSuffixTo: [/\.vue$/]
                }
            },

            {
                test: /\.tsx?$/,
                enforce: 'pre',
                include: [path.resolve(__dirname, "devPkg")],
                loader: 'tslint-loader'
            },

            {
                test: /\.js$/,
                include: [path.resolve(__dirname, "devPkg")],
                loader: 'babel-loader'
            },
            
            {
                test: /\.(png|jpg|gif|ttf|svg|woff|eot)$/,
                loader: 'url-loader',
                options: {
                    limit: 3000,
                    name: './images/[name].[ext]?[hash]'
                }
            }
        ]
    },
    plugins: [
        new ChunkCleanPlugin(path.join(__dirname, './static')),
        new ExtractTextPlugin('./style/main.css')
    ],
    devServer: {
        proxy: {
            "/api": {
                target: "http://10.176.155.39:19998",
                pathRewrite: {"^/api": ""},
                secure: false
            }
        }
    }
};
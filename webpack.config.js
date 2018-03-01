/*********************************************************************
 * Created by deming-su on 2017/12/30
 *********************************************************************/

const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        "all.min": "./devPkg/main.ts"
    },
    
    output: {
        path: path.join(__dirname, './static'),
        publicPath: '/static/',
        filename: '[name].js',
        libraryTarget: 'umd',
        library: 'lensyn-ui',
        umdNamedDefine: true
    },
    
    resolve: {
        extensions: ['.js', '.vue', '.json', '.ts']
    },

    module: {
        noParse: /es6-promise\.js$/,

        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.less$/,
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
                exclude: /node_modules|vue\/src/,
                loader: 'ts-loader',
                options: {
                  appendTsSuffixTo: [/\.vue$/]
                }
              },
            {
                test: /\.js$/,
                exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
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
        new ExtractTextPlugin('./style/main.css')
    ]
};
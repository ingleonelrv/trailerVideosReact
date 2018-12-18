const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin') //lo reemplazo por MiniCssExtractPlugin https://webpack.js.org/plugins/mini-css-extract-plugin/
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const CleanWebPackPlugin = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
//optimizecssassetsplugin considerar ya que css-loader - minimize ya no funca

const config = {  
    entry: {
        app: path.resolve(__dirname, 'src/entries/app.js'),
        // redux: path.resolve(__dirname, 'src/entries/redux.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'ssr/[name].js', // [name] corresponde a cada entry, en este caso invie.hash.js
        publicPath: "/", //esta ruta es la que el servidor reconocera
        chunkFilename: 'js/[id].[chunkhash].js', // id 0-n, un codigo hash.js
        libraryTarget: 'commonjs2'
    },
    devServer: {
        port: 9000,
    },
    target: 'node',
    optimization: {
        minimizer: [
            new UglifyJsPlugin(), //comprime js
            new OptimizeCSSAssetsPlugin({}) //comprime css
        ]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                //exclude: /(node_modules|bower_components)/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: [require('@babel/plugin-proposal-object-rest-spread'), '@babel/plugin-proposal-class-properties'] //este es para las caracteristicas especiales ...object
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                  ]
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: [
                    {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        fallback: 'file-loader', //si pesan mas entonces uso esto
                        name: 'images/[name].[hash].[ext]', //configuracion de ruta destino de file-loader
                    }
                    }
                ]
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "./css/[name].css",
            chunkFilename: "[id].[chunkhash].css"
          })
    ]
}
module.exports = (env)=>{
    if (env.NODE_ENV === 'production') {
        config.plugins.push(
            new CleanWebPackPlugin(['dist'],{root: __dirname}) //que quiero borrar dist, desde donde voy a borrar?
        )    
    }
    return config;
}
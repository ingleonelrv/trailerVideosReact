const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    "platzi-video": path.resolve(__dirname, 'index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js' // [name] corresponde a cada entry, en este caso invie
  },
  devServer: {
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [require('@babel/plugin-proposal-object-rest-spread')] //este es para las caracteristicas especiales ...object
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1000000,
              fallback: 'file-loader', //si pesan mas entonces uso esto
              name: 'images/[name].[hash].[ext]', //configuracion de ruta destino de file-loader
            }
          }
        ]
      },
    ]
  }
}
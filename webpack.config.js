const html = require('html-webpack-plugin'),
MiniCss = require('mini-css-extract-plugin')


module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.css/,
        exclude: /node_modules/,
        use: [
          MiniCss.loader,
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCss(),
    new html({template: './public/index.html'})
  ]
}

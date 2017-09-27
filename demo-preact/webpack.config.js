var webpack = require('webpack')

module.exports = {
  entry:`${__dirname}/js/index.js`,
  output: {
    filename: 'app.js',
    path: `${__dirname}/js`
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        loader: 'babel-loader',
        options: {
          presets: [
            'es2015'
          ],
          plugins: [
            ['transform-react-jsx', { pragma: 'h' }]
          ]
        }
      }
    ]
  }
}

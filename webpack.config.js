const path = require(`path`)

module.exports = {
  // entry: {
  //   index: `./src/js/index.js`,
  //   nosotros: `./src/js/nosotrs.js`
  // },
  // output: {
  //   filename: `[name].personalizado.js`,
  //   path: path.join(__dirname,`dist`)
  // },
  devServer:{
    contentBase:path.join(__dirname, `dist`),
    compress:true,
    port:9000
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        exclude:/node_modules/,
        use:{
          loader:`babel-loader`
        }
      },
      {
        test: /\.(s[ac]ss|css)$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader'
        ]
      }
    ]
  }
  // optimization:{
  //   splitChunks:{
  //     cacheGroups:{
  //       commons:{
  //         test:/[\\/]node_modules[\\/]/,
  //         name:`common`,
  //         chunks:`all`
  //       }
  //     }
  //   }
  // }
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all'
  //   }
  // }
}
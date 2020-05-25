const { join } = require('path');

module.exports = {
  devtool: 'source-map',
  entry: {
    index: './src/index.js'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.m?js$/iu,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  forceAllTransforms: true
                }
              ]
            ]
          }
        }
      }
    ]
  },
  optimization: {
    minimize: false
  },
  output: {
    libraryTarget: 'commonjs2',
    path: join(__dirname, 'lib')
  }
};

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
        include: /node_modules\/event-target-shim/,
        test: /\.m?js$/,
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
  output: {
    libraryTarget: 'commonjs2',
    path: join(__dirname, 'lib')
  }
};

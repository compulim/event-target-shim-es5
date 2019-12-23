const { join } = require('path');

module.exports = {
  entry: {
    'event-target-shim-es5.production.min': './src/index.js'
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
    library: 'EventTargetShim',
    libraryTarget: 'window',
    path: join(__dirname, 'dist')
  }
};

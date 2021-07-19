module.exports = {
  entry: './web.js',
  mode: 'production',
  output: {
    filename: 'main.webpack-commonjs.js'
  },
  resolve: {
    mainFields: ['main']
  }
};

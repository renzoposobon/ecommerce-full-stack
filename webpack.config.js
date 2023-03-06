module.exports = {
  entry: './src/server.js',
  output: {
    path: __dirname + 'public/js',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
};

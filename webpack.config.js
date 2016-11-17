module.exports = {
  entry: './main.js',
  output: {
    filename: './public/bundle.js'
  },
  devServer: {
    contentBase: './public',
    hot: true
  },
  module: {
    loaders: [
    {
      test: /\.jsx?$/,
      exclude: /node_moduels/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      }
    }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};

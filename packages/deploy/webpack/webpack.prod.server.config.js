const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    prodServer: [
      path.resolve(__dirname, '..', 'src', 'server', 'startServer.hot.ts'),
    ],
  },
  stats: 'errors-only',
  target: 'node',
  node: {
    __dirname: false,
  },
  resolve: {
    extensions: [
      '.ts',
      '.tsx',
      '.js',
      '.json',
    ],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader',
      },
      {
        test: /\.flow$/,
        use: 'null-loader',
      },
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    // new webpack.NoEmitOnErrorsPlugin(),
  ],
  output: {
    path: path.join(__dirname, '..', 'dist', 'server'),
    filename: '[name].js',
  },
};

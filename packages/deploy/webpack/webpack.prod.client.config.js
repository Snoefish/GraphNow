const { resolve } = require('path');
const webpack = require('webpack');
const Visualizer = require('webpack-visualizer-plugin');

module.exports = {
  entry: {
    client: resolve(__dirname, '..', 'src', 'client', 'mountClient.hot.tsx'),
  },
  target: 'web',
  resolve: {
    extensions: [
      '.ts',
      '.tsx',
      '.js',
      '.json',
    ],
  },
  output: {
    path: resolve(__dirname, '..', 'dist', 'client'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /^(?!.*\.spec\.tsx?$).*\.tsx?$/,
        use: 'awesome-typescript-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.flow$/,
        use: 'null-loader',
      },
      {
        test: /.html$/,
        use: 'html-loader',
      },
    ],
  },
  stats: 'errors-only',
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'ramda': 'R',
    'lodash': '_',
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.EnvironmentPlugin({ NODE_ENV: 'production' }),
    new Visualizer(),
  ],
};

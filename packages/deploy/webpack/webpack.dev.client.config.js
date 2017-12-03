const { resolve } = require('path');
const webpack = require('webpack');

const HOT_LOAD_ENTRIES = [
  'react-hot-loader/patch',
  'webpack-dev-server/client?http://localhost:3005',
  require.resolve('react-error-overlay'),
   'webpack/hot/only-dev-server',
];

module.exports = {
  entry: {
    client: [
      ...HOT_LOAD_ENTRIES,
      resolve(__dirname, '..', 'src', 'client', 'mountClient.hot.tsx'),
    ],
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
    publicPath: 'http://localhost:3005/',
  },
  module: {
    rules: [
      {
        test: /^(?!.*\.spec\.tsx?$).*\.tsx?$/,
        use: [
          {
            loader: 'react-hot-loader/webpack',
          },
          {
            loader: 'awesome-typescript-loader',
          },
        ],
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
  devtool: 'source-map',
  devServer: {
    host: 'localhost',
    port: 3005,
    hot: true,
    overlay: true,
    historyApiFallback: true,
    stats: 'errors-only',
    headers: { 'Access-Control-Allow-Origin': '*' },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.EnvironmentPlugin({ NODE_ENV: 'development' }),
  ],
};

const path = require('path');
const StartServerPlugin = require('start-server-webpack-plugin');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const HOT_LOAD_ENTRIES = [
  'webpack/hot/poll?1000',
];

module.exports = {
  entry: {
    devServer: [
      ...HOT_LOAD_ENTRIES,
      path.resolve(__dirname, '..', 'src', 'server', 'startServer.hot.ts'),
    ]
  },
  watch: true,
  stats: 'errors-only',
  target: 'node',
  node: {
    __dirname: false,
  },
  externals: [nodeExternals({
    whitelist: ['webpack/hot/poll?1000'],
  })],
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
    new StartServerPlugin({
      name: 'devServer.js',
      nodeArgs: ['--harmony'],
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoEmitOnErrorsPlugin(),
  ],
  output: {
    path: path.join(__dirname, '..', 'dist', 'server'),
    filename: '[name].js',
  },
};

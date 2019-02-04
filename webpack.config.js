import path from 'path';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

const compiler = webpack({
  mode: 'development',
  entry: ['whatwg-fetch', path.resolve(__dirname, 'js', 'app.js')],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /\/node_modules\//,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  output: {
    filename: 'app.js',
    path: '/',
  },
});

const app = new WebpackDevServer(compiler, {
  contentBase: '/public/',
  publicPath: '/js/',
  stats: {colors: true},
});


export default app;
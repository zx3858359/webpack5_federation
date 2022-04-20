const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
const deps = require('./package.json').dependencies;
module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3002,
  },
  output: {
    publicPath: 'auto',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'app2',
      filename: 'remoteEntry.js',
      remotes: {
        /** 消费 app1 消费 footer remoteEntry.js 与 footer.js 会被提前加载 早于 App.js的加载*/
        app1: 'app1@http://localhost:3001/remoteEntry.js',
        footer: 'footer@http://localhost:3001/footer.js',
        header: 'header@http://localhost:3001/header.js',
        app1Route: 'app1Route@http://localhost:3001/app1Route.js'
      },
      exposes: {
        /** 提供 Button 组件 会生成 remoteEntry.js 里面包含 Button组件 */
        './Button': './src/Button',
      },
      shared: [
        {
          ...deps,
          react: {
            // eager: true,
            singleton: true,
            requiredVersion: deps.react,
          },
          'react-dom': {
            // eager: true,
            singleton: true,
            requiredVersion: deps['react-dom'],
          },
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};

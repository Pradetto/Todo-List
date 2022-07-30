const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', // see debug errors
    entry: './src/index.js',
    devtool: 'inline-source-map', //Helps debug
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Todo List Page',
      }),
    ],
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    module: {
      rules: [
        {
        // File loader to include images 
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
        },
        // this is for css used: npm install --save-dev style-loader css-loader
        {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
        },
    ],
    },

};
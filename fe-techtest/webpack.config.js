const path = require('path');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
      ],
    }],
  },
  output: {
    path: path.resolve(__dirname, 'public/assets/'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  }
};

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Entry point for your application
  output: {
    filename: 'bundle.js', // Output JavaScript bundle
    path: path.resolve(__dirname, 'dist'), // Output directory
    clean: true, // Clean the `dist` folder before each build
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html', // HTML template
      filename: 'index.html', // Output HTML file
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i, // Match CSS files
        use: ['style-loader', 'css-loader'], // Load and inject CSS
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // Match image files
        type: 'asset/resource', // Use Webpack's `asset/resource` for images
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i, // Match font files
        type: 'asset/resource', // Use Webpack's `asset/resource` for fonts
      },
    ],
  },
  resolve: {
    alias: {
      assets: path.resolve(__dirname, 'src/assets/'), // Optional alias for better file management
    },
  },
  mode: 'development', // Can be set to 'production' for optimized builds
  devServer: {
    static: './dist', // Serve files from the `dist` folder
    port: 8080, // Local development server port
    open: true, // Automatically open the browser
    hot: true, // Enable hot module replacement
  },
};

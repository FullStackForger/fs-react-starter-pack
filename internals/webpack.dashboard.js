const path = require('path')
const Webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	devtool: 'eval',
	entry: [
		'whatwg-fetch',
		'webpack-hot-middleware/client',
		'./src/client.js'
	],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
		publicPath: '/'
  },
	module: {
		loaders: [{
			test: /\.js?$/,
			exclude: /node_modules/,
			loaders: ['babel-loader'],
		}, {
			test: /\.css$/,
			loader: "style!css"
		}, {
			test: /\.(jpg|png)$/,
			//include: PATHS.images,
			loader: 'url?limit=25000'
		}]
	},
	plugins: [
		new Webpack.optimize.OccurrenceOrderPlugin(),
		//new Webpack.NoErrorsPlugin(),
		new Webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin()
	]
}
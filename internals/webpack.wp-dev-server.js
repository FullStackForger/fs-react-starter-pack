const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	context: path.resolve(__dirname, '../src'),
	entry: [
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		'whatwg-fetch',
		'./client.js'
	],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
	module: {
		loaders: [{
			test: /\.(js|jsx)$/,
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
		new webpack.NoErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin()
	]
}
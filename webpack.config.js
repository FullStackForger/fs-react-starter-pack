const webpack = require('webpack')
const path = require('path')

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		'whatwg-fetch',
		'./src/app'
	],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
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
		new webpack.NoErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin()
	]
}
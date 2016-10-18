const webpack = require('webpack')
const path = require('path')

module.exports = function(config) {
	config.set({
		basePath: '',
		frameworks: ['mocha'],
		files: [
			// each file acts as entry point for the webpack configuration
			'src/*.spec.js',
			'src/**/*.spec.js'
		],

		preprocessors: {
			// add webpack as preprocessor
			'src/*.spec.js': ['webpack'],
			'src/**/*.spec.js': ['webpack']
		},

		webpack: {
			// karma watches the test entry points
			// (you don't need to specify the entry option)
			// webpack watches dependencies

			//devtool: 'inline-source-map', //
			module: {
				loaders: [{
					test: /\.js$/,
					exclude: path.resolve(__dirname, 'node_modules'),
					loader: 'babel',
				},{
					test: /\.css$/,
					loader: "style!css"
				},{
					test: /\.(jpg|png)$/,
					loader: 'url?limit=25000'
				},{
						test: /\.json$/,
						loader: 'json',
				}]
			},
			externals: {
				'cheerio': 'window',
				'react/addons': true,
				'react/lib/ExecutionEnvironment': true,
				'react/lib/ReactContext': true
			},
			// plugins: [
			// 	new webpack.NoErrorsPlugin(),
			// 	new webpack.HotModuleReplacementPlugin()
			// ]
		},

		webpackServer: {
			noInfo: true //please don't spam the console when running in karma!
		},

		plugins: [
			'karma-webpack',
			'karma-mocha',
			//'karma-jasmine',
			'karma-sourcemap-loader',
			'karma-chrome-launcher',
			'karma-phantomjs-launcher'
		],


		babelPreprocessor: {
			// options: {
			// 	presets: ['airbnb']
			// }
		},
		reporters: ['progress'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: ['Chrome'],
		singleRun: false,
	})
}
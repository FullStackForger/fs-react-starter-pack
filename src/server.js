const Path = require('path')
const Hapi = require('hapi')
const Inert = require('inert')
const Vision = require('vision')
const HapiReactViews = require('hapi-react-views')

const Webpack = require('webpack')
const DashboardPlugin = require('webpack-dashboard/plugin')
const wpConfig = require('../internals/webpack.dashboard.js')

const server = new Hapi.Server({
	connections: {
		routes: {
			files: {
				relativeTo: Path.join(process.cwd(), 'assets')
			}
		}
	}
})

const host = 'localhost'
const port = 3000

const compiler = Webpack(wpConfig)
compiler.apply(new DashboardPlugin())

require('babel-core/register')({
	presets: ['react', 'es2015']
})

server.connection({
	host,
	port
})

const devMiddleware = require('webpack-dev-middleware')(compiler, {
	host,
	port,
	historyApiFallback: true,
	publicPath: wpConfig.output.publicPath,
	hot: true,
	quiet: true  // webpack-dashboard setup
})

const hotMiddleware = require('webpack-hot-middleware')(compiler, {
	log: () => {}
})


server.ext('onRequest', (request, reply) => {

	devMiddleware(request.raw.req, request.raw.res, (err) => {
		if (err) {
			return reply(err)
		}

		reply.continue()
	})
})

server.ext('onRequest', (request, reply) => {
	hotMiddleware(request.raw.req, request.raw.res, (err) => {
		if (err) {
			return reply(err)
		}

		reply.continue()
	})
})

// server.ext('onPreResponse', (request, reply) => {
//
// 	// config for html-webpack-plugin
// 	const filename = Path.join(compiler.outputPath, 'index.html')
//
// 	compiler.outputFileSystem.readFile(filename, (fileReadError, result) => {
//
// 		if (fileReadError) {
// 			// better logging output
// 			if (fileReadError.path) {
// 				fileReadError.message += ': ' + fileReadError.path
// 			}
// 			return reply(fileReadError)
// 		}
//
// 		reply(result).type('text/html')
// 	})
// })

server.on('request-error', (request, err) => {
	console.log('Error response (500) sent for request: ' + request.id + ' because: ' + err.message)
	console.log(err.stack)
})

server.register([Inert, Vision], (err) => {

	if (err) {
		console.log('Failed to load plugins.')
	}

	server.views({
		engines: {
			jsx: HapiReactViews
		},
		relativeTo: __dirname,
		path: 'components',
		compileOptions: {
			renderMethod: 'renderToString',
			layoutPath: Path.join(__dirname, 'components'),
			layout: 'HTML'
		}
	})

	server.route({
		method: 'GET',
		path: '/',
		handler: (request, reply) => {

			const context = { foo: 'baz' }
			context.state = 'window.state = ' + JSON.stringify(context) + ''

			reply.view('App', context)
		}
	})

	server.route({
		method: 'GET',
		path: '/{param*}',
		handler: {
			directory: {
				path: '.',
				redirectToSlash: false,
				index: false
			}
		}
	})


	server.start((err) => {
		if (err) throw err
		console.log(`hapi server started on ${server.info.uri}`)
	})

})
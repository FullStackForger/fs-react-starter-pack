const Path = require('path')
const Hapi = require('Hapi')
const Webpack = require('webpack')
const DashboardPlugin = require('webpack-dashboard/plugin')
const wpConfig = require('../internals/webpack.dashboard.js')

const server = new Hapi.Server()
const host = 'localhost'
const port = 3000
server.connection({ host, port })

const compiler = Webpack(wpConfig)
compiler.apply(new DashboardPlugin())

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

server.ext('onPreResponse', (request, reply) => {

	// config for html-webpack-plugin
	const filename = Path.join(compiler.outputPath, 'index.html')

	compiler.outputFileSystem.readFile(filename, (fileReadError, result) => {

		if (fileReadError) {
			// better logging output
			if (fileReadError.path) {
					fileReadError.message += ': ' + fileReadError.path
			}
			return reply(fileReadError)
		}

		reply(result).type('text/html')
	})
})

server.on('request-error', (request, err) => {
	console.log('Error response (500) sent for request: ' + request.id + ' because: ' + err.message)
	console.log(err.stack)
})

server.start((err) => {
	if (err) throw err
	console.log(`hapi server started on ${server.info.uri}`)
})
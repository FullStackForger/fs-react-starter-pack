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

server.connection({ host, port })
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

	server.route({ method: 'GET', path: '/fonts/{path*}',  handler: { directory: { path: 'fonts' } } })
	server.route({ method: 'GET', path: '/img/{path*}',  handler: { directory: { path: 'img' } } })
	server.route({ method: 'GET', path: '/styles/{param*}',  handler: { directory: { path: 'styles' } } })
	server.route({
		method: 'GET',
		path: '/{url*}',
		handler: (request, reply) => {

			// require transpiled es6 dependencies
			const routes = require('./config/routes').default
			const reactRouter = require('react-router')
			const match = reactRouter.match
			const createMemoryHistory = reactRouter.createMemoryHistory
			const initStore = require('./config/store').initStore
			const memoryHistory = createMemoryHistory(request.url.path)

			// initialize store (it syncs history with store)
			initStore(memoryHistory)
			const history = require('./config/store').history

			// match application routes
			match({ history, routes, location: request.url.path }, (error, redirectLocation, renderProps) => {
				if (error) {
					reply({error: `${request.url.path} doesn't exist`})
				} else if (redirectLocation) {
					response.redirect(redirectLocation.pathname + redirectLocation.search)
				} else if (renderProps) {
					reply.view('App', {
						renderProps: renderProps,
						state: `window.state = ${JSON.stringify({foo: 'baz'})}`
					})
				}
			})
		}
	})


	server.start((err) => {
		if (err) throw err
		console.log(`hapi server started on ${server.info.uri}`)
	})

})
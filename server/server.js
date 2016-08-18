'use strict'
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')
const app = express()

// local dependencies
const routes = require('./routes')
const Model = require('./model')

// connect to DB
Model.connect();

// express middleware
app.set('port', process.env.PORT || 8080)
app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '../client')))

// routes
app.use('/api', routes)

// start server
app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'))
})
'use strict'
const Express = require('express')
const Router = Express.Router()
const Model = require('./model')
const User = Model.User

const config = require('./config')
const auth = require('./auth')
const verifyCredentials = auth.verifyCredentials
const createJWT = auth.createJWT
const request = require('request')

Router.get('/status', function (req, res) {
  res.send({
		status: 'ok'
	})
})

Router.post('/auth/login', function(req, res) {
  User.findOne({ email: req.body.email }, '+password', function(err, user) {
    if (!user) {
      return res.status(401).send({ message: 'Invalid email and/or password' })
    }
    user.comparePassword(req.body.password, function(err, isMatch) {
      if (!isMatch) {
        return res.status(401).send({ message: 'Invalid email and/or password' })
      }
      res.send({ token: createJWT(user) })
    })
  })
})

Router.post('/auth/signup', function(req, res) {
  User.findOne({ email: req.body.email }, function(err, existingUser) {
    if (existingUser) {
      return res.status(409).send({ message: 'Email is already taken' })
    }
    var user = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    });
    user.save(function(err, result) {
      if (err) {
        res.status(500).send({ message: err.message })
      }
      res.send({ token: createJWT(user) })
    });
  });
});

Router.get('/auth/refresh', verifyCredentials, function(req, res) {
  User.findById(req.user, function(err, user) {
    res.send({ token: createJWT(user) })
  });
})

Router.post('/auth/facebook', function(req, res) {
	var fields = ['id', 'email', 'first_name', 'last_name', 'link', 'name']
	var accessTokenUrl = 'https://graph.facebook.com/v2.5/oauth/access_token'
	var graphApiUrl = 'https://graph.facebook.com/v2.5/me?fields=' + fields.join(',')
	var params = {
		code: req.body.code,
		client_id: req.body.clientId,
		client_secret: config.FACEBOOK_SECRET,
		redirect_uri: req.body.redirectUri
	}
	console.log(req.body)

	// Step 1. Exchange authorization code for access token.
	request.get({ url: accessTokenUrl, qs: params, json: true }, function(err, response, accessToken) {
		if (response.statusCode !== 200) {
			return res.status(500).send({ message: accessToken.error.message })
		}

		// Step 2. Retrieve profile information about the current user.
		request.get({ url: graphApiUrl, qs: accessToken, json: true }, function(err, response, profile) {
			if (response.statusCode !== 200) {
				return res.status(500).send({ message: profile.error.message })
			}
			if (req.header('Authorization')) {
				User.findOne({ facebook: profile.id }, function(err, existingUser) {
					if (existingUser) {
						return res.status(409).send({ message: 'There is already a Facebook account that belongs to you' });
					}
					var token = req.header('Authorization').split(' ')[1]
					var payload = jwt.decode(token, config.TOKEN_SECRET)
					User.findById(payload.sub, function(err, user) {
						if (!user) {
							return res.status(400).send({ message: 'User not found' })
						}
						user.facebook = profile.id
						user.picture = user.picture || 'https://graph.facebook.com/v2.3/' + profile.id + '/picture?type=large'
						user.displayName = user.displayName || profile.name
						user.save(function() {
							var token = createJWT(user)
							res.send({ token: token })
						})
					})
				})
			} else {
				// Step 3. Create a new user account or return an existing one.
				User.findOne({ facebook: profile.id }, function(err, existingUser) {
					if (existingUser) {
						var token = createJWT(existingUser)
						return res.send({ token: token })
					}
					var user = new User()
					user.facebook = profile.id
					user.picture = 'https://graph.facebook.com/' + profile.id + '/picture?type=large'
					user.displayName = profile.name
					user.save(function() {
						var token = createJWT(user)
						res.send({ token: token })
					})
				})
			}
		})
	})
})

Router.get('/me', verifyCredentials, function(req, res) {
  User.findById(req.user, function(err, user) {
    res.send(user);
  });
});

Router.put('/me', verifyCredentials, function(req, res) {
  User.findById(req.user, function(err, user) {
		if (err || !user) {
      return res.status(400).send({ message: 'User not found' })
    }
    user.username = req.body.username || user.username
    user.email = req.body.email || user.email
		user.bio = req.body.bio || ''
    user.save(function(err) {
			if (err) {
				res.status(501).send({ message: err.message })
			}
      res.status(200).end()
    })
  })
})

module.exports = Router
'use strict'
const Express = require('express')
const JWT = require('jwt-simple')
const Router = Express.Router()
const Model = require('./model')
const User = Model.User
const moment = require('moment')
const config = require('./config')

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
        return res.status(401).send({ message: 'Invalid email and/or password' });
      }
      res.send({ token: createJWT(user) })
    })
  })
})

Router.post('/auth/signup', function(req, res) {
  User.findOne({ email: req.body.email }, function(err, existingUser) {
    if (existingUser) {
      return res.status(409).send({ message: 'Email is already taken' });
    }
    var user = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    });
    user.save(function(err, result) {
      if (err) {
        res.status(500).send({ message: err.message });
      }
      res.send({ token: createJWT(user) })
    });
  });
});


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


function verifyCredentials(req, res, next) {
  if (!req.header('Authorization')) {
    return res.status(401).send({ message: 'Please make sure your request has an Authorization header' });
  }
  var token = req.header('Authorization').split(' ')[1];

  var payload = null;
  try {
    payload = JWT.decode(token, config.TOKEN_SECRET);
  }
  catch (err) {
    return res.status(401).send({ message: err.message });
  }

  if (payload.exp <= moment().unix()) {
    return res.status(401).send({ message: 'Token has expired' });
  }
  req.user = payload.sub;
  next();
}


function createJWT(user) {
  var payload = {
    sub: user._id,
    iat: moment().unix(),
    exp: moment().add(14, 'days').unix()
  };
  return JWT.encode(payload, config.TOKEN_SECRET);
}
'use strict'
const Bcrypt = require('bcryptjs')
const Mongoose = require('mongoose')
const config = require('./config')
const userSchema = new Mongoose.Schema({
  email: { type: String, unique: true, lowercase: true },
  password: { type: String, select: false },
	displayName: { type: String },
	picture: { type: String },
	bio: { type: String, maxlength: 160 },
	facebook: { type: String }
})

userSchema.pre('save', function(next) {
  var user = this
  if (!user.isModified('password')) {
    return next()
  }
  Bcrypt.genSalt(10, function(err, salt) {
		if (err) {
			return next(err)
		}
    Bcrypt.hash(user.password, salt, function(err, hash) {
			if (err) {
				return next(err)
			}
      user.password = hash
      next()
    })
  })
})

userSchema.methods.comparePassword = function(password, done) {
  Bcrypt.compare(password, this.password, function(err, isMatch) {
    done(err, isMatch)
  })
}

const User = Mongoose.model('User', userSchema)

function connect() {
	Mongoose.connect(config.MONGO_URI);
	Mongoose.connection.on('error', function(err) {
		console.log('Error: Could not connect to MongoDB. Did you forget to run `mongod`?'.red)
	})
}

module.exports = {
	User: User,
	connect: connect
}
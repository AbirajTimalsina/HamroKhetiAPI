const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../Models/users');
const auth = require('./Auth');

router.post('/signup', (req, res, next) => {
    let password = req.body.password;
    bcrypt.hash(password, 10, function(err, hash) {
      if (err) {
        let err = new Error('Could not hash!');
        err.status = 500;
        return next(err);
      }
      User.create({
        Fullname: req.body.Fullname,
        Pasword: hash,
        image: req.body.image
      })
        .then(user => {
          let token = jwt.sign({ _id: user._id }, process.env.SECRET);
          res.json({ status: 'Signup success!', token: token });
        })
        .catch(next);
    });
  });
  
  router.post('/login', (req, res, next) => {
    User.findOne({ username: req.body.username })
      .then(user => {
        if (user == null) {
          let err = new Error('User not found!');
          err.status = 401;
          return next(err);
        } else {
          bcrypt
            .compare(req.body.password, user.password)
            .then(isMatch => {
              if (!isMatch) {
                let err = new Error('Password does not match!');
                err.status = 401;
                return next(err);
              }
              let token = jwt.sign({ _id: user._id }, process.env.SECRET);
              res.json({ status: 'Login success!', token: token });
            })
            .catch(next);
        }
      })
      .catch(next);
  });
  
  router.get('/me', auth.verifyUser, (req, res, next) => {
    res.json({
      _id: req.user._id,
      firstName: req.user.firstName,
      lastName: req.user.lastName,
      username: req.user.username,
      image: req.user.image
    });
  });
  module.exports = router;
var express = require('express');
var User = require('../models/index').User

var sha1 = require('sha1');

var router = express.Router();

router.post('/login', function (req, res, next) {
  User.findOne({
    where: {
      account: req.body.account,
      password: sha1(req.body.password)
    }
  }).then(function (data) {
    if (data) {
      data.password = ''
      res.json({
        code: 0,
        message: 'Successful!',
        data
      })
    } else {
      res.json({
        code: 1,
        message: '登录失败'
      })
    }
  })
});

router.post('/register', function (req, res, next) {
  var account = req.body.account;
  var password = req.body.password;

  User.findOne({ 
    where: {
      account
    }
  }).then(function (data) {
    if (data) {
      res.json({
        code: 2,
        message: '已有该用户，注册失败'
      })
    } else {
      User.create({ account, password: sha1(password) }).then(function () {
        res.json({
          code: 0,
          message: '注册成功'
        })
      })
    }
  })
});

router.post('/update', function (req, res, next) {
  var account = req.body.account;
  var password = req.body.password;
  var newPassword = req.body.newPassword;

  User.update({
    account,
    password: sha1(newPassword)
  }, {
    where: {
      account,
      password: sha1(password)
    }
  }).then(function () {
    res.json({
      code: 0,
      message: '更改密码成功'
    })
  })
});

module.exports = router;

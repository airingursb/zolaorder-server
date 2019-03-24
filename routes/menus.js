var express = require('express');
var Menu = require('../models/index').Menu
var router = express.Router();

router.post('/list', function (req, res, next) {
  Menu.findAll().then(function (data) {
    res.json({
      code: 0,
      message: 'Successful!',
      data
    })
  })
});

module.exports = router;
var express = require('express');
var Order = require('../models/index').Order

var router = express.Router();

router.post('/create', function (req, res, next) {
  var status = 0;
  var user_id = req.body.user_id;
  var begin_date = Date.now(); // 得到当前时间戳
  var end_date = -1;
  var cid = ''; // TODO: 缺失
  var content = ''; // TODO: 缺失

  Order.create({
    user_id,
    begin_date,
    end_date,
    status,
    cid,
    content,
  }).then(function () {
    res.json({
      code: 0,
      message: '创建成功'
    })
  })
});

// 订单列表（后台用）
router.get('/list', function (req, res, next) {
  Order.findAll().then(function (data) {
    res.json({
      code: 0,
      message: 'Successful!',
      data
    })
  })
});

// 用户已完成的订单
router.get('/end_orders', function (req, res, next) {
  Order.findAll({
    where: {
      end_date: {
        $gt: 0
      },
      user_id: req.query.user_id
    }
  }).then(function (data) {
    res.json({
      code: 0,
      message: 'Successful!',
      data
    })
  })
});

// 用户未完成的订单
router.get('/processing_order', function (req, res, next) {
  Order.findOne({
    where: {
      end_date: {
        $lt: 0
      },
      user_id: req.query.user_id
    }
  }).then(function (data) {
    res.json({
      code: 0,
      message: 'Successful!',
      data
    })
  })
});

router.post('/finish', function (req, res, next) {
  var id = req.body.id; 
  Order.update(
  {
    status: 1,
    end_date: Date.now()
  }, 
  {
    where: {
      id
    }
  }).then(function () {
    res.json({
      code: 0,
      message: '完成订单'
    })
  })
});

module.exports = router;

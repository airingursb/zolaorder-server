const Sequelize = require('sequelize');

exports.dbConnect = function () {

  return new Sequelize('zola', 'root', '1123581321', {
    'host': 'localhost',
    'port': 3306,
    'dialect': 'mysql',
    'define': {
      'underscored': true // 字段以下划线方式分割，避免自动生成驼峰式命名字段
    }
  })
}
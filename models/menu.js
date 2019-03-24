module.exports = function (sequelize, DataTypes) {

  return sequelize.define('menu', {
    'name': DataTypes.STRING(45),
    'price': DataTypes.INTEGER, // 单位：美分
    'pic': DataTypes.STRING(45),
    'sales': DataTypes.INTEGER,
  })
}

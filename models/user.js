module.exports = function (sequelize, DataTypes) {

  return sequelize.define('user', {
    'account': DataTypes.STRING(45),
    'password': DataTypes.STRING(45)
  })
}
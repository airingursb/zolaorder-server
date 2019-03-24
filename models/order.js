module.exports = function (sequelize, DataTypes) {

  return sequelize.define('order', {
    'uuid': DataTypes.STRING(45),
    'user_id': DataTypes.INTEGER,
    'begin_date': DataTypes.DOUBLE,
    'end_date': DataTypes.DOUBLE,
    'status': DataTypes.INTEGER,
    'cid': DataTypes.STRING(250),
    'content': DataTypes.TEXT,
  })
}

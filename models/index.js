const db = require('../config/sequelize').dbConnect();

const User = db.import('./user');
const Menu = db.import('./menu');
const Order = db.import('./order');

User.hasMany(Order, { foreignKey: 'user_id' });

Order.belongsTo(User, { foreignKey: 'user_id' })

db.sync();

module.exports = {
  User,
  Menu,
  Order
}

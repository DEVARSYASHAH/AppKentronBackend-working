const Sequelize = require('sequelize');
const config = require('../config/config');

const db = {};
const sequelize = new Sequelize(config.development);

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Organization = require('./Organization')(sequelize, Sequelize);
db.User = require('./User')(sequelize, Sequelize);

module.exports = db;

const Sequelize = require("sequelize");

const sequelize = require("../db");

const Admin = sequelize.define("admin", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  username: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING(300),
    allowNull: false,
  },
});

module.exports = Admin;

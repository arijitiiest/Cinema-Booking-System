const Sequelize = require("sequelize");

const sequelize = require("../db");

const User = sequelize.define("user", {
  user_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  first_name: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
  last_name: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING(300),
    allowNull: false,
  },
});

module.exports = User;

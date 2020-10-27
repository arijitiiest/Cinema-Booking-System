const Sequelize = require("sequelize");

const sequelize = require("../db");

const Shows = sequelize.define("shows", {
  show_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  time: Sequelize.STRING(30),
  screen: Sequelize.STRING(10),
  date: Sequelize.DATEONLY,
  language: Sequelize.STRING
});

module.exports = Shows;

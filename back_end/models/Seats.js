const Sequelize = require("sequelize");

const sequelize = require("../db");

const Seats = sequelize.define("seats", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  row_no: Sequelize.STRING(10),
  col_no: Sequelize.INTEGER,
  screen: Sequelize.STRING(10),
  price: Sequelize.INTEGER,
});

module.exports = Seats;

const Sequelize = require("sequelize");

const sequelize = require("../db");

const Reviews = sequelize.define("reviews", {
  review_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  comment: Sequelize.TEXT,
  rating: Sequelize.DECIMAL,
});

module.exports = Reviews;
const Sequelize = require("sequelize");

const sequelize = require("../db");

const SeatStatus = sequelize.define("seatstatus", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
//   screen: Sequelize.STRING(10),
  date: Sequelize.DATEONLY,
  showtime: Sequelize.STRING(10),
  status: Sequelize.STRING(10),
  user_id: Sequelize.INTEGER,
  movie_id: Sequelize.INTEGER
});

module.exports = SeatStatus;

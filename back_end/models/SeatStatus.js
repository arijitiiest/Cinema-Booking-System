const Sequelize = require("sequelize");

const sequelize = require("../db");

const SeatStatus = sequelize.define("seatstatus", {
  seat_status_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
//   screen: Sequelize.STRING(10),
  date: Sequelize.DATEONLY,
  showtime: Sequelize.STRING(10),
  status: Sequelize.STRING(10),
});

module.exports = SeatStatus;

const Sequelize = require("sequelize");

const sequelize = require("../db");

const Movies = sequelize.define("movies", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
  desc: Sequelize.STRING(300),
  genres: Sequelize.ARRAY(Sequelize.STRING(50)),
  casts: Sequelize.ARRAY(Sequelize.STRING(50)),
  crews: Sequelize.ARRAY(Sequelize.STRING(50)),
  running_time: Sequelize.INTEGER,
  format: Sequelize.STRING(2),
  languages: Sequelize.ARRAY(Sequelize.STRING(50)),
  age_level: Sequelize.INTEGER,
  image_url: {
    type: Sequelize.STRING,
    defaultValue: "default.jpg",
  },
});

module.exports = Movies;

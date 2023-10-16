const { Sequelize } = require("sequelize");

module.exports = new Sequelize("favorite_music_db", "albert", "albert", {
  host: "localhost",
  port: 5432,
  dialect: "postgres",
});

const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const AudioFile = sequelize.define("audio_file", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    unique: true,
    autoIncrement: true,
  },

  artist: {
    type: DataTypes.STRING,
    unique: false,
    allowNull: false,
  },

  title: {
    type: DataTypes.STRING,
    unique: false,
    allowNull: false,
  },

  link: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },

  createdAt: {
    type: DataTypes.DATE,
    autoIncrementIdentity: true,
    allowNull: true,
  },
  updatedAt: {
    type: DataTypes.DATE,
    autoIncrementIdentity: true,
    allowNull: true,
  },
});


module.exports = AudioFile
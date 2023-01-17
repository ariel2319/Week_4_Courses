const DB = require('../utils/database');

const { DataTypes } = require('sequelize');

const Users = DB.define('users', {
   id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false
   },
   first_name: {
      type: DataTypes.STRING,
      allowNull: false
   },
   last_name: {
      type: DataTypes.STRING,
      allowNull: false
   },
   password: {
      type: DataTypes.STRING,
      allowNull: false
   },
   email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
         isEmail: true
      }
   }
});

module.exports = Users;
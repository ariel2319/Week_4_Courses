const DB = require('../utils/database');

const { DataTypes } = require('sequelize');

const Courses = DB.define('courses', {
   id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false
   },
   title: {
      type: DataTypes.STRING,
      allowNull: false,
   },
   description: {
      type: DataTypes.STRING
   },
   instructor: {
      type: DataTypes.STRING
   }
});

module.exports = Courses;
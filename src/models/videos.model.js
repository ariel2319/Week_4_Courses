const DB = require('../utils/database');

const { DataTypes } = require('sequelize');
const Courses = require('./courses.model');

const Videos = DB.define('videos', {
   id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false
   },
   title: {
      type: DataTypes.STRING,
      allowNull: false
   },
   url: {
      type: DataTypes.STRING,
      allowNull: false
   },
   course_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
         model: Courses,
         id: 'id'
      }
   }
});

module.exports = Videos;
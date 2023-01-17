const DB = require('../utils/database');

const { DataTypes } = require('sequelize');
const Courses = require('./courses.model');
const Categories = require('./categories.model');

const CourseCategories = DB.define('courseCategories', {
   id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false
   },
   course_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
         model: Courses,
         key: 'id'
      }
   },
   category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
         model: Categories,
         key: 'id'
      }
   }
});

module.exports = CourseCategories;
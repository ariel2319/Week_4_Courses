const DB = require('../utils/database');

const { DataTypes } = require('sequelize');
const Courses = require('./courses.model');

const Categories = DB.define('categories', {
   id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true
   },
   name: {
      type: DataTypes.STRING,
      allowNull: false
   },
   /*
   courseCategories_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'courseCategories_id',
      references: {
         model: Courses,
         key: 'id'
      }
   } */

}, {
   timestamps: false
});

module.exports = Categories;
const DB = require('../utils/database');

const { DataTypes } = require('sequelize');
const Users = require('./users.model');
const Courses = require('./courses.model');

const UserCourses = DB.define('userCourses', {
   id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true
   },
   user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
         model: Users,
         key: 'id'
      }
   },
   course_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
         model: Courses,
         key: 'id'
      }
   }
});

module.exports = UserCourses;
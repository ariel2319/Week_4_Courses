const db = require('../utils/database');

const Users = require('../models/users.model');
const Categories = require('../models/categories.model');
const CourseCategories = require('../models/courseCategories.model');
const Courses = require('../models/courses.model');
const Videos = require('../models/videos.model');
const UserCourses = require('../models/userCourses.model');

const users = [
   {
      first_name: 'Ariel',
      last_name: 'Sanchez',
      password: '12345',
      email: 'ariel@gmail.com'
   }
];

db.sync({ force: true })
   .then(() => {
      console.log('hay siembra perrito?');
      users.forEach((user) => Users.create(user));
   })
   .catch((error) => console.log(error));
const Users = require('./users.model');
const Categories = require('./categories.model');
const CourseCategories = require('./courseCategories.model');
const Courses = require('./courses.model');
const Videos = require('./videos.model');
const UserCourses = require('./userCourses.model');

const initModels = () => {

   // users 1 - M usercourses
   UserCourses.belongsTo(Users, { as: '', foreignKey: 'user_id' });
   Users.hasMany(UserCourses, { as: '', foreignKey: 'user_id' });
   // userscourses M - 1 courses
   UserCourses.belongsTo(Courses, { as: '', foreignKey: 'course_id' });
   Courses.hasMany(UserCourses, { as: '', foreignKey: 'course_id' });
   // courses M - 1 coursecategories
   Courses.belongsTo(CourseCategories, { as: '', foreignKey: 'course_id' });
   CourseCategories.hasMany(Courses, { as: '', foreignKey: 'course_id' });
   // coursecategories 1 - M categories
   Categories.belongsTo(CourseCategories, { as: '', foreignKey: 'category_id' });
   CourseCategories.hasMany(Categories, { as: '', foreignKey: 'category_id' });
   // courses 1 - M videos
   Videos.belongsTo(Courses, { as: '', foreignKey: 'course_id' });
   Courses.hasMany(Videos, { as: '', foreignKey: 'course_id' });

}

module.exports = initModels;
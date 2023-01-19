const Courses = require('../models/courses.model');

class CoursesServices {
   static async getAll() {
      try {
         const result = await Courses.findAll();
         return result;
      } catch (error) {
         throw error;
      }
   }
   static async create(newCourse) {
      try {
         const result = await Courses.create(newCourse);
         return result;
      } catch (error) {
         throw error;
      }
   }
}

module.exports = CoursesServices;
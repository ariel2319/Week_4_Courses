const Courses = require('../models/courses.model');
const Users = require('../models/users.model');

class UserServices {
   static async getById(id) {
      try {
         const result = await Users.findByPk(id);
         return result;
      } catch (error) {
         throw error;
      }
   }

   /* static async getUserWithCourses() {
      try {
         const result = await Users.findOne({
            where: { id },
            include: {
               model: Courses,
               as: 
            }
         });
         return result;
      } catch (error) {
         throw error;
      }
   }
 */
   static async create(user) {
      try {
         const result = await Users.create(user);
         return result;
      } catch (error) {
         throw error;
      }
   }

   static async update(field, id) {
      try {
         const result = await Users.update(field, { where: { id } });
         return result;
      } catch (error) {
         throw error;
      }
   }

   static async addCourseToUser() {
      try {
         const result = await Users.findByPk(id);
         return result;
      } catch (error) {
         throw error;
      }
   }

}

module.exports = UserServices;

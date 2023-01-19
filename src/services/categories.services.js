const Categories = require('../models/categories.model');

class CatServices {

   static async getAll() {
      try {
         const result = await Categories.findAll();
         return result;
      } catch (error) {
         throw error;
      }
   }

   static async create(newCat) {
      try {
         const result = await Categories.create(newCat);
         return result;
      } catch (error) {
         throw error;
      }
   }

   static async delete(id) {
      try {
         const result = await Categories.destroy({ where: { id } });
         return result;
      } catch (error) {
         throw error;
      }
   }

}

module.exports = CatServices;
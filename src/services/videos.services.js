const Video = require('../models/videos.model');

class VideoServices {

   static async getAll() {
      try {
         const result = await Video.findAll();
         return result;
      } catch (error) {
         throw error;
      }
   }

   static async create(video) {
      try {
         const result = await Video.create(video);
         return result;
      } catch (error) {
         throw error;
      }
   }

   static async delete(id) {
      try {
         const result = await Video.destroy({ where: { id } });
         return result;
      } catch (error) {
         throw error;
      }
   }

}

module.exports = VideoServices;
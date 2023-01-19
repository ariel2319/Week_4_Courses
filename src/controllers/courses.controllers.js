const CourseServices = require('../services/courses.services');

const getAllCourses = async (req, res) => {
   try {
      const result = await CourseServices.getAll();
      res.status(200).json(result);
   } catch (error) {
      res.status(400).json(error.message);
   }
}
const getByIdWithCatandVideo = async (req, res) => {
   try {

   } catch (error) {

   }
}
const createCourse = async (req, res) => {
   try {
      const newCourse = req.body;
      const result = await CourseServices.create(newCourse);
      res.status(200).json(result);
   } catch (error) {
      res.status(400).json(error.message);
   }
}
const updateCourse = async (req, res) => {
   try {

   } catch (error) {

   }
}


module.exports = {
   getAllCourses,
   getByIdWithCatandVideo,
   createCourse,
   updateCourse
}

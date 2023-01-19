const { Router } = require('express');
const {
   getAllCourses,
   getByIdWithCatandVideo,
   createCourse,
   updateCourse
} = require('../controllers/courses.controllers');

const router = Router();

router.get('/course', getAllCourses); //OK
router.get('/course/:id/', getByIdWithCatandVideo);

router.post('/course', createCourse); //OK

router.put('/course/:id', updateCourse);

module.exports = router; 
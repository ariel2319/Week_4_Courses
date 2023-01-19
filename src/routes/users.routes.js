const { Router } = require('express');
const {
   getUserById,
   getUserWithCourses,
   createUser,
   updateUser,
   addCourseToUser
} = require('../controllers/users.controllers');

const router = Router();

router.get('/users/:id', getUserById); //OK
router.get('/users/:id/course', getUserWithCourses);

router.post('/users', createUser); //OK

router.put('/users/:id', updateUser); //OK

router.put('/users/:id/course', addCourseToUser) 

module.exports = router; 
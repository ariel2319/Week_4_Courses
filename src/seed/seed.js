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
   },
   {
      first_name: 'Alejandro',
      last_name: 'Pereyra',
      password: '12345',
      email: 'alejandro@gmail.com'
   },
   {
      first_name: 'Yesica',
      last_name: 'Florentino',
      password: '12345',
      email: 'yesica@gmail.com'
   },
   {
      first_name: 'Josema',
      last_name: 'Wenedit',
      password: '12345',
      email: 'josema@gmail.com'
   }
];

const categories = [
   { name: 'Web Development' },
   { name: 'Mobile Development' },
   { name: 'Information Science' },
   { name: 'Software Testing' }
];

const courseCategories = [
   { course_id: '1', category_id: '1' },
   { course_id: '2', category_id: '4' },
   { course_id: '3', category_id: '1' },
   { course_id: '3', category_id: '2' }
];

const courses = [
   { title: 'JavaScript', description: 'Introducción a JS', instructor: 'Ian' },
   { title: 'Cypress', description: 'Primeros pasos en el testing con Cypress' },
   { title: 'ReactJS', instructor: 'Germán' },
   { title: 'NodeJs', description: 'Node: de cero a experto', instructor: 'Kevin' }
];

const videos = [
   { title: '¿Qué es ReactJS?', url: 'react-js.com/asd', course_id: '3' },
   { title: 'Renderizado Condicional', url: 'react-js.com/dfgdf', course_id: '3' },
   { title: 'Hola Mundo en JS', url: 'javascript.com.ar/js', course_id: '1' },
   { title: 'Ciclo de vida de un proceso en Node', url: '', course_id: '4' },
   { title: 'Request y Response', url: '', course_id: '4' },
   { title: 'Desplegar aplicación en Railway.app', url: '', course_id: '4' },
   { title: 'Correr prueba desde el Cmder', url: '', course_id: '2' },
   { title: 'Introducción a los Asserts', url: '', course_id: '2' }
];

const userCourses = [
   { user_id: '1', course_id: '2' },
   { user_id: '1', course_id: '3' },
   { user_id: '2', course_id: '4' },
   { user_id: '4', course_id: '1' }
];

db.sync({ force: true })
   .then(() => {
      console.log('hay siembra perrito?');
      users.forEach((user) => Users.create(user));

      setTimeout(() => {
         categories.forEach((category) => Categories.create(category));
      }, 100);

      setTimeout(() => {
         courses.forEach((course) => Courses.create(course))
      }, 150);

      setTimeout(() => {
         videos.forEach((video) => Videos.create(video))
      }, 200);

      setTimeout(() => {
         courseCategories.forEach((courseCat) => CourseCategories.create(courseCat))
      }, 250);

      setTimeout(() => {
         userCourses.forEach((userC) => UserCourses.create(userC))
      }, 300);

   })
   .catch((error) => console.log(error));
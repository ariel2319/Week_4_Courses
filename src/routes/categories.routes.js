const { Router } = require('express');
const {
   getAllCat,
   createCategory,
   deleteCategory
} = require('../controllers/categories.controllers');

const router = Router();

router.get('/category', getAllCat); //OK

router.post('/category', createCategory); //OK

router.delete('/category/:id', deleteCategory); //OK

module.exports = router; 
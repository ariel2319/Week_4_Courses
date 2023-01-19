const CatServices = require('../services/categories.services');

const getAllCat = async (req, res) => {
   try {
      const result = await CatServices.getAll();
      res.status(200).json(result);
   } catch (error) {
      res.status(400).json(error.message);
   }
}

const createCategory = async (req, res) => {
   try {
      const newCat = req.body;
      const result = await CatServices.create(newCat);
      res.status(201).json(result);
   } catch (error) {
      res.status(400).json(error.message);
   }
}

const deleteCategory = async (req, res) => {
   try {
      const { id } = req.params;
      const result = await CatServices.delete(id);
      res.status(200).json(result);
   } catch (error) {
      res.status(400).json(error.message);
   }
}

module.exports = {
   getAllCat,
   createCategory,
   deleteCategory
}
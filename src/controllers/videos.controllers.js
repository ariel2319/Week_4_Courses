const VideoServices = require('../services/videos.services');

const getAllVideos = async (req, res) => {
   try {
      const result = await VideoServices.getAll();
      res.status(200).json(result);
   } catch (error) {
      res.status(400).json(error.message);
   }
}
const createVideo = async (req, res) => {
   try {
      const newVideo = req.body;
      const result = await VideoServices.create(newVideo);
      res.status(201).json(result);
   } catch (error) {
      res.status(400).json(error.message);
   }
}

const deleteVideo = async (req, res) => {
   try {
      const { id } = req.params;
      const result = await VideoServices.delete(id);
      res.status(200).json(result);
   } catch (error) {
      res.status(400).json(error.message);
   }
}

module.exports = {
   getAllVideos,
   createVideo,
   deleteVideo
}
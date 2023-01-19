const { Router } = require('express');
const {
   createVideo,
   deleteVideo,
   getAllVideos
} = require('../controllers/videos.controllers');

const router = Router();

router.get('/videos', getAllVideos);

router.post('/videos', createVideo); //OK

router.delete('/videos/:id', deleteVideo); //OK

module.exports = router;
const express = require('express');
const router = express.Router();
const videoService = require('../services/videoService')
const logger = require('../logs/logger')

//routes
router.post('/new', create);

module.exports = router

function create(req, res, next) {
    videoService.create(req.body)
        .then(video => res.json(video))
        .catch(err => next(err));
}
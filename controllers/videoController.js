const express = require('express');
const router = express.Router();
const videoService = require('../services/videoService')
const logger = require('../logs/logger')

//routes
router.post('/new', create);
router.get('/:id', getById);

module.exports = router

function create(req, res, next) {
    videoService.create(req.body)
        .then(video => res.json(video))
        .catch(err => { 
            next(err)
            logger.error(err)
        });
}

function getById(req, res, next) {
    videoService.getById(req.params.id)
        .then(video => res.json(video))
        .catch(err => { 
            next(err)
            logger.error(err)
        });
}
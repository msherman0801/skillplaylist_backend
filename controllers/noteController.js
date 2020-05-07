const express = require('express');
const router = express.Router();
const noteService = require('../services/noteService')
const logger = require('../logs/logger')

//routes
router.get('/:id', getById);
router.get('/:videoId', getAllByVideoId);
router.get('/:userId/:videoId', getAllByUserForVideo);
router.post('/new', create);
router.delete('/:id', _delete);

module.exports = router

function getById(req, res, next) {
    noteService.getById(req.params.id)
        .then(note => res.json(note))
        .catch(err => { 
            next(err)
            logger.error(err)
        });
}

function getAllByVideoId(req, res, next) {
    noteService.getById(req.params.id)
        .then(notes => res.json(notes))
        .catch(err => { 
            next(err)
            logger.error(err)
        });
}

function getAllByUserForVideo(req, res, next) {
    noteService.getAllByUserForVideo(req.params.username, req.params.videoId)
        .then(notes => res.json(notes))
        .catch(err => { 
            next(err)
            logger.error(err)
        });
}

function create(req, res, next) {
    noteService.create(req.body)
        .then(note => res.json(note))
        .catch(err => { 
            next(err)
            logger.error(err)
        });
}

function _delete(req, res, next) {
    noteService.delete(req.params.id)
        .then(() => res.json({}))
            .catch(err => { 
                next(err)
                logger.error(err)
            });
}
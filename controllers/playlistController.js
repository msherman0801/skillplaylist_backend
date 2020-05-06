const express = require('express');
const router = express.Router();
const playlistService = require('../services/playlistService')
const logger = require('../logs/logger')

// routes
router.post('/new', create)
router.get('/', getAll);
router.get('/:id', getById);
router.get('/:id/videos', getVideosByPlaylistId);
router.get('/:technology', getPlaylistsByTechnology);
router.get('/tags', getPlaylistsByTags);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;

function create(req, res, next) {
    playlistService.create(req.body)
        .then(playlist => res.json(playlist))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    playlistService.getAll()
        .then(playlists => res.json(playlists))
        .catch(err => next(err));
}

function getById(req, res, next) {
    playlistService.getById(req.params.id)
        .then(playlist => res.json(playlist))
        .catch(err => next(err));
}

function getVideosByPlaylistId(req, res, next) {
    playlistService.getVideosByPlaylistId(req.params.id)
        .then(videos => res.json(videos))
        .catch(err => next(err));
}

function getPlaylistsByTechnology(req, res, next) {
    playlistService.getPlaylistsByTechnology(req.body.technology)
        .then(playlists => res.json(playlists))
        .catch(err => next(err));
}

function getPlaylistsByTags(req, res, next) {
    playlistService.getPlaylistsByTechnology(req.body)
        .then(playlists => res.json(playlists))
        .catch(err => next(err));
}

function update(req, res, next) {
    playlistService.update(req.params.id, req.body)
        .then(playlist => res.json(playlist))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    playlistService.delete(req.params.id)
        .then(playlist => res.json(playlist))
        .catch(err => next(err));
}
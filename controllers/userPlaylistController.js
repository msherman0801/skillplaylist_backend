const express = require('express');
const router = express.Router();
const userPlaylistService = require('../services/userPlaylistService');
const userService = require('../services/userService');
const logger = require('../logs/logger');

// routes
router.post('/new', create)
router.get('/', getAll);
router.get('/:id', getById);
router.get('/:id/videos', getVideosByPlaylistId);
router.get('/:category', getPlaylistsByCategory);
router.get('/tags', getPlaylistsByTags);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;

function create(req, res, next) {
    const userId = req.body.id;
    const playlist = req.body.playlist;
    userPlaylistService.create(playlist)
        .then(playlist => {
            userService.addPlaylist(userId, playlist.id, "userPlaylists")
            res.json(playlist)
        })
        .catch(err => { 
            next(err)
            logger.error(err)
        });
}

function getAll(req, res, next) {
    userPlaylistService.getAll()
        .then(playlists => res.json(playlists))
        .catch(err => { 
            next(err)
            logger.error(err)
        });
}

function getById(req, res, next) {
    userPlaylistService.getById(req.params.id)
        .then(playlist => res.json(playlist))
        .catch(err => { 
            next(err)
            logger.error(err)
        });
}

function getVideosByPlaylistId(req, res, next) {
    userPlaylistService.getVideosByPlaylistId(req.params.id)
        .then(videos => res.json(videos))
        .catch(err => { 
            next(err)
            logger.error(err)
        });
}

function getPlaylistsByCategory(req, res, next) {
    userPlaylistService.getPlaylistsByCategory(req.body.category)
        .then(playlists => res.json(playlists))
        .catch(err => { 
            next(err)
            logger.error(err)
        });
}

function getPlaylistsByTags(req, res, next) {
    userPlaylistService.getPlaylistsByCategory(req.body)
        .then(playlists => res.json(playlists))
        .catch(err => { 
            next(err)
            logger.error(err)
        });
}

function update(req, res, next) {
    userPlaylistService.update(req.params.id, req.body)
        .then(playlist => res.json(playlist))
        .catch(err => { 
            next(err)
            logger.error(err)
        });
}

function _delete(req, res, next) {
    userPlaylistService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => { 
            next(err)
            logger.error(err)
        });
}
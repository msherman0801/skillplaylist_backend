const express = require('express');
const router = express.Router();
const userService = require('../services/userService')
const logger = require('../logs/logger')

// routes
router.post('/authenticate', authenticate);
router.post('/register', register);
router.get('/', getAll);
router.get('/current', getCurrent);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;

function authenticate(req, res, next) {
    userService.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => { 
            next(err)
            logger.error(err)
        });
}

function register(req, res, next) {
    userService.create(req.body)
        .then(user => res.json(user))
        .catch(err => { 
            next(err)
            logger.error(err)
        });
}

function getAll(req, res, next) {
    userService.getAll()
        .then(users => res.json(users))
        .catch(err => { 
            next(err)
            logger.error(err)
        });
}

function getCurrent(req, res, next) {
    userService.getById(req.user.sub)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => { 
            next(err)
            logger.error(err)
        });
}

function getById(req, res, next) {
    userService.getById(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => { 
            next(err)
            logger.error(err)
        });
}

function update(req, res, next) {
    userService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => {
            next(err)
            logger.error(err)
        });
}

function _delete(req, res, next) {
    userService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => { 
            next(err)
            logger.error(err)
        });
}
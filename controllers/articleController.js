const express = require('express');
const router = express.Router();
const articleService = require('../services/articleService')
const logger = require('../logs/logger')

//routes
router.get('/', getAll);
router.get('/:id', getById);
// router.get('/tags', getByTags);
router.get('/bydate', getByDate);
router.get('/fromdate', getFromDate);
router.get('/new', create);
router.get('/update', update);
router.get('/delete', _delete);

module.exports = router

function getAll(req, res, next) {
    articleService.getAll()
        .then(articles => res.json(articles))
        .catch(err => { 
            next(err)
            logger.error(err)
        });
}

function getById(req, res, next) {
    articleService.getById(req.params.id)
        .then(article => res.json(article))
        .catch(err => { 
            next(err)
            logger.error(err)
        });
}

// function getByTags(req, res, next) {
//     articleService.getByTags(req.body)
    
//     .catch(err => { 
//         next(err)
//         logger.error(err)
//     });
// }

function getByDate(req, res, next) {
    articleService.getByDate(req.body.date)
        .then(article => res.json(article))
        .catch(err => { 
            next(err)
            logger.error(err)
        });
}

function getFromDate(req, res, next) {
    articleService.getByDate(req.body.date)
        .then(articles => res.json(articles))
        .catch(err => { 
            next(err)
            logger.error(err)
        });
}

function create(req, res, next) {
    articleService.create(req.body)
        .then(article => res.json(article))
        .catch(err => { 
            next(err)
            logger.error(err)
        });
}

function update(req, res, next) {
    articleService.create(req.params.id, req.body)
        .then(article => res.json(article))
        .catch(err => { 
            next(err)
            logger.error(err)
        });
}

function _delete(req, res, next) {
    articleService.delete(req.body)
        .then(() => res.json({}))
        .catch(err => { 
            next(err)
            logger.error(err)
        });
}
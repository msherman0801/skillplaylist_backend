const express = require('express');
const router = express.Router();
const articleService = require('../services/articleService')
const logger = require('../logs/logger')

//routes
router.get('/', getAll);

module.exports = router

function getAll(req, res, next) {
    articleService.getAll()
        .then(articles => res.json(articles))
        .catch(err => logger.info(err))
}
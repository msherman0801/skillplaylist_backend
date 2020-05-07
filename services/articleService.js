const config = require('../environments/config');
const jwt = require('jsonwebtoken');
const Article = require('../models/article')

module.exports = {
    getAll,
    getById,
    getByDate,
    getFromDate,
    create,
    update,
    delete: _delete
}

async function create(articleParam) {
    const article = new Article(articleParam);
    await article.save();
    return article;
}

async function getById(id) {
    return await Article.findById(id);
}

async function getByDate(date) {
    return await Article.find({created_by: date})
}

async function getFromDate(date) {
    return await Article.find({created_by: date})
}

async function update(id, updatedArticle) {
    const article = await Article.findById(id);
    if (!article) throw "Article doesn't exist when trying to update";
    Object.assign(article, updatedArticle);
    await article.save();
    return article;
}

async function _delete(id) {
    await Article.findByIdAndRemove(id);
}


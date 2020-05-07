const config = require('../environments/config');
const jwt = require('jsonwebtoken');
const Video = require('../models/video')

module.exports = {
    create,
    getById
};

async function create(videoParam) {
    const video = new Video(videoParam);
    await video.save();
    return video;
}

async function getById(id) {
    return await Video.findById(id);
}
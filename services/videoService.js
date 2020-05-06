const config = require('../environments/config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../_helpers/db');
const Video = require('../models/video')

module.exports = {
    create,
    getAll,
    // getById,
    // getVideosByPlaylistId,
    // getPlaylistsByTechnology,
    // getPlaylistsByTags,
    // update,
    // delete: _delete
}

async function create(videoParam) {
    const video = new Video(videoParam)
    await video.save()
    return video
}

async function getAll() {
    return await Video.find();
}
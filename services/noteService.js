const config = require('../environments/config');
const jwt = require('jsonwebtoken');
const Note = require('../models/note')

module.exports = {
    create,
    getById,
    getAllByVideoId,
    getAllByUserForVideo,
    _delete
    // getVideosByPlaylistId,
    // getPlaylistsByTechnology,
    // getPlaylistsByTags,
    // update,
    // delete: _delete
};

async function create(noteParam) {
    const note = new Note(noteParam);
    await note.save();
    return note;
}

async function getById(id) {
    return await Note.findById(id);
}

async function getAllByVideoId(id) {
    return await Note.find({"videoId" : id})
}

async function getAllByUserForVideo(username) {
    return await Note.find({"username" : username, "videoId" : id})
}

async function _delete(id) {
    return await Note.findByIdAndRemove(id);
}
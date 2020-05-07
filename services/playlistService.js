const config = require('../environments/config');
const jwt = require('jsonwebtoken');
const Playlist = require('../models/playlist')

module.exports = {
    create,
    getAll,
    getById,
    // getVideosByPlaylistId,
    getPlaylistsByCategory,
    // getPlaylistsByTags,
    update,
    delete: _delete
};

async function create(playlistParam) {
    const playlist = new Playlist(playlistParam);
    await playlist.save();
    return playlist;
}

async function getAll() {
    return await Playlist.find();
}

async function getById(id) {
    return await Playlist.findById(id);
}

async function getPlaylistsByCategory(category) {
    return await Playlist.find({"category" : category});
}

async function update(id, playlistParam) {
    const playlist = Playlist.findById(id);
    if (!playlist) throw "playlist not found";
    Object.assign(playlist, playlistParam);
    await playlist.save();
}

async function _delete(id) {
    await Playlist.findByIdAndRemove(id);
}
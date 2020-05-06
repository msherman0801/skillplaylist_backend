const config = require('../environments/config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../_helpers/db');
const Playlist = require('../models/playlist')

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

async function create(playlistParam) {
    const playlist = new Playlist(playlistParam)
    await playlist.save()
    return playlist
}

async function getAll() {
    return await Playlist.find();
}
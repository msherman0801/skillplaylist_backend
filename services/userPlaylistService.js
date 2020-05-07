const config = require('../environments/config');
const jwt = require('jsonwebtoken');
const UserPlaylist = require('../models/userPlaylist')

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

async function create(userPlaylistParam) {
    const userPlaylist = new UserPlaylist(userPlaylistParam);
    await userPlaylist.save();
    return userPlaylist;
}

async function getAll() {
    return await UserPlaylist.find();
}

async function getById(id) {
    return await UserPlaylist.findById(id);
}

async function getPlaylistsByCategory(category) {
    return await UserPlaylist.find({"category" : category});
}

async function update(id, userPlaylistParam) {
    const userPlaylist = UserPlaylist.findById(id);
    if (!userPlaylist) throw "user playlist not found";
    Object.assign(userPlaylist, userPlaylistParam);
    await userPlaylist.save();
    return userPlaylist
}

async function _delete(id) {
    await UserPlaylist.findByIdAndRemove(id);
}
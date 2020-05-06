module.exports = function mainRoutes(app) {
    app.use('/users', require('./userController'))
    app.use('/playlists', require('./playlistController'))
    app.use('/videos', require('./videoController'))
    // app.use('/notes', require('./noteController'))
    // app.use('/articles', require('./articleController'))
}
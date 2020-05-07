const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = new Schema({
    title: { type: String, required: true },
    url: { type: String, required: true },
    youtubeTitle: { type: String, required: true },
    description: { type: String },
    youtubeDescription: { type: String },
    author: { type: String, required: true },
    tags: [{ type: String }],
    playlistKey: { type: String, required: true },
    //using a playlistKey instead of ID, because the video objects must be persisted before a playlist is,
    // therefore there wouldn't be an ID for the playlist yet
    viewCount: { type: Number },
    topic: { type: String, required: true }
})

videoSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    }
});

module.exports = mongoose.model('Video', videoSchema);
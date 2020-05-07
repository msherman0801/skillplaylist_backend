const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const FKHelper = require('../_helpers/foreign-key-helper');

const playlistSchema = new Schema({
    key: { type: String, required: true },
    name: { type: String, required: true },
    desription: { type: String, default: "A skill playlist." },
    tags: [{ type: String }],
    videoIds: {
        type: [Schema.ObjectId],
        ref: 'Video',
        validate: {
                isAsync: true,
                validator: function(v) {
                return FKHelper(mongoose.model('Video'), v);
            },
                message: `Video doesn't exist`
            },
        required: true
    },
    viewCount: { type: Number },
    category: { type: String },
    topic: { type: String },
    subtopic: { type: String },
    owner: { type: String, required: true }
})

playlistSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    }
});

module.exports = mongoose.model('Playlist', playlistSchema);
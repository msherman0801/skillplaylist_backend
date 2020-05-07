const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const FKHelper = require('../_helpers/foreign-key-helper');

const userSchema = new Schema({
    username: { type: String, unique: true, required: true },
    hash: { type: String, required: true },
    email: { type: String, required: true },
    role: { type: String, required: true },
    playlists: [{
        type: Schema.ObjectId,
        ref: 'Playlist',
        validate: {
            isAsync: true,
            validator: function(v) {
                return FKHelper(mongoose.model('Playlist'), v);
            },
            message: `Playlist doesn't exist`
        }
    }],
    userPlaylists: [{
        type: Schema.ObjectId,
        ref: 'Playlist',
        validate: {
            isAsync: true,
            validator: function(v) {
                return FKHelper(mongoose.model('Playlist'), v);
            },
            message: `Playlist doesn't exist`
        }
    }],
    checkpoints: [{
        playlistId: { type: Schema.ObjectId },
        videoIds: [{ type: Schema.ObjectId }]
    }],
    notes: [{
        videoId: { type: Schema.ObjectId },
        noteId: { type: Schema.ObjectId }
    }],
    friends: [{ type: Schema.ObjectId }],
    progress: { type: String },
    createdDate: { type: Date, default: Date.now }
})

userSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});

module.exports = mongoose.model('User', userSchema);
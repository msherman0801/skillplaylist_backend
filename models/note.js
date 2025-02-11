const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const FKHelper = require('../_helpers/foreign-key-helper');

const noteSchema = new Schema({
    text: { type: String, required: true },
    createdDate: { type: Date, default: Date.now },
    videoIds: {
        type: Schema.ObjectId,
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
    username: { type: String, required: true }
})

noteSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    }
});

module.exports = mongoose.model('Note', noteSchema);
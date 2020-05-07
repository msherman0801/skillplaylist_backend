const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const FKHelper = require('../_helpers/foreign-key-helper');

const articleSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    length: { type: String, required: true },
    body: { type: String, required: true },
    tags: [{ type: String }],
    imageUrl: { type: String, required: true },
    createdDate: { type: Date, default: Date.now }
});

userSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    }
});

module.exports = mongoose.model('Article', articleSchema);
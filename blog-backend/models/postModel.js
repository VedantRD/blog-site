const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    createdAt: { type: Date, required: true },
    tags: { type: [String] },
    html: { type: String }
})

module.exports = Post = mongoose.model('posts', postSchema)
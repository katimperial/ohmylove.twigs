const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CommentSchema = new Schema(
    {
        user_id: { type: Schema.Types.ObjectId, ref: 'user_id' },
        blog_id: { type: Schema.Types.ObjectId, ref: 'blog_id' },
        content: { type: String, required: true }
    },
    { timestamps: true },
)

module.exports = CommentSchema
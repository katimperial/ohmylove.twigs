const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BlogPostSchema = new Schema(
    {
        user_id: { type: Schema.Types.ObjectId, ref: 'user_id' },
        content: { type: String, required: true }
    },
    { timestamps: true },
)

module.exports = BlogPostSchema
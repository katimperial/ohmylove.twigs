const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VideoSchema = new Schema(
    {
        video: { type: String, required: true },
        caption: { type: String, required: true },
    }
)

module.exports = VideoSchema
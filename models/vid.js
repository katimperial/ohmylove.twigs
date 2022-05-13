const { Schema } = require('mongoose')

const VidSchema = new Schema(
    {
        video: { type: String, required: true },
        caption: { type: String, required: true },
    },
    { timestamps: true }
)

module.exports = VidSchema
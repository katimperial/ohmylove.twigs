const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GallerySchema = new Schema(
    {
        image: { type: String, required: true },
        photographer: { type: String, required: true },
    }
)

module.exports = GallerySchema
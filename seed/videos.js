const db = require('../db')
const { Gallery } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const galleries = [
    ]

    await Gallery.insertMany(galleries)
    console.log("Here is the gallery!")
}
const run = async () => {
    await main()
    db.close()
}

run()
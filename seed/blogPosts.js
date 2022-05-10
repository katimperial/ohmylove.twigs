const db = require('../db')
const { BlogPost } = require('../models')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const comments = [
        { content: '' }
    ]

    await Comment.insertMany(comments)
    console.log("Created blog posts!")
}
const run = async () => {
    await main()
    db.close()
}

run()
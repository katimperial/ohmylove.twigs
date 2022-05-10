const db = require('../db')
const { Comment } = require('../models')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const comments = [
        { blog_id: '', content: '' }
    ]

    await Comment.insertMany(comments)
    console.log("Created comments!")
}
const run = async () => {
    await main()
    db.close()
}

run()
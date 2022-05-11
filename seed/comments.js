const db = require('../db')
const { Comment, BlogPost } = require('../models')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const blog = await BlogPost.find({ content: 'example' })
    const comments = [
        { blog_id: blog[0]._id, content: 'comment example' }
    ]

    await Comment.insertMany(comments)
    console.log("Created comments!")
}
const run = async () => {
    await main()
    db.close()
}

run()
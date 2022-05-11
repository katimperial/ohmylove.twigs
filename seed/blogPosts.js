const db = require('../db')
const { BlogPost } = require('../models')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const blogPosts = [
        { content: 'example' }
    ]

    await BlogPost.insertMany(blogPosts)
    console.log("Created blog posts!")
}
const run = async () => {
    await main()
    db.close()
}

run()
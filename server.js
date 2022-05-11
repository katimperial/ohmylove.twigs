const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { BlogPost, Comment, Gallery, Video } = require('./models')

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

app.get('/', (req, res) => {
  res.send('This is root!')
})

app.get('/blogposts', async (req, res) => {
    const blogposts = await BlogPost.find()
    res.json(blogposts)
})

app.get('/comments', async (req, res) => {
    const comments = await Comment.find()
    res.json(comments)
})

app.get('/gallery', async (req, res) => {
    const gallery = await Gallery.find()
    res.json(gallery)
})

app.get('/videos', async (req, res) => {
    const videos = await Video.find()
    res.json(videos)
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
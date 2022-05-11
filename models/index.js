const mongoose = require('mongoose')
const BlogPostSchema = require('./blogPost')
const CommentSchema = require('./comment')
const UserSchema = require('./user')
const GallerySchema = require('./gallery')
const VideoSchema = require('./video')

const BlogPost = mongoose.model('BlogPost', BlogPostSchema)
const Comment = mongoose.model('Comment', CommentSchema)
const User = mongoose.model('User', UserSchema)
const Gallery = mongoose.model('Gallery', GallerySchema)
const Video = mongoose.model('Video', VideoSchema)

module.exports = {
    BlogPost,
    Comment,
    User,
    Gallery,
    Video
}
const { rmSync } = require('fs');
const { BlogPost, Comment, Gallery, Vid, } = require('../models')

const getBlogPosts = async (req, res) => {
    try {
        const blogPosts = await BlogPost.find()
        return res.status(200).json({ blogPosts })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteBlogPost = async (req, res) => {
    try {
        const {_id} = req.params
        const deleted = await BlogPost.findByIdAndDelete(_id)
        console.log(deleted)
        if (deleted) {
            return res.status(200).send('Blog deleted')
        }
        throw new Error('Blog not found')
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createBlogPosts = async (req, res) => {
    try {
        const blogPost = await new BlogPost(req.body)
        await blogPost.save()
        return res.status(201).json({
            blogPost,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getComments = async (req, res) => {
    try {
        const comments = await Comment.find()
        return res.status(200).json({ comments })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createComment = async (req, res) => {
    console.log(req.body)
    try {
        const comment = await new Comment(req.body)
        await comment.save()
        return res.status(201).json({
            comment,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const updateComment = async (req, res) => {
    try {
        const {_id} = req.params
        let updated = await Comment.findByIdAndUpdate(_id, req.body, {new: true}, (err, comment)=>{
            if (err) {
                res.status(500).send(err)
            }
            if (!comment) {
                res.status(500).send('Comment not found')
            }
            return res.status(200).json(comment)
        })
    } catch (error) {
    }
}

const deleteComment = async (req, res) => {
    try {
        const {_id} = req.params
        const deleted = await Comment.findByIdAndDelete(_id)
        console.log(deleted)
        if (deleted) {
            return res.status(200).send('Project deleted')
        }
        throw new Error('Project not found')
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getGallery = async (req, res) => {
    try {
        const gallery = await Gallery.find()
        return res.status(200).json({ gallery })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getVids = async (req, res) => {
    try {
        const videos = await Vid.find()
        return res.status(200).json({ videos })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}



module.exports = {
    getBlogPosts,
    deleteBlogPost,
    createBlogPosts,
    getComments,
    createComment,
    updateComment,
    deleteComment,
    getGallery,
    getVids
}
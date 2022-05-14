import axios from "axios"
import React, { useEffect, useState } from 'react'
import Comments from './Comments'

const Posts = (props) => {

    const [blogposts, setBlogPosts] = useState()

    const getBlogPosts = async () => {
        try {
            await axios.get(`http://localhost:3001/api/blogposts`).then(
                response =>
                setBlogPosts(response.data.blogPosts))
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getBlogPosts()
    }, [])

    const [comments, setComments] = useState([])
    const [selectedComments, setSelectedComments] = useState(null)

    const getComments = async () => {
        await axios.get(`http://localhost:3001/api/comments`).then(
            response =>
            setComments(response.data.comments))
    }
    useEffect(() => {
        getComments()
    }, [])

    return (
        <div>
        <div className="blog-posts">
            {blogposts ?
                blogposts.map((blogPost) => (
                    <div key={blogPost.id} className="posts">
                        <h4>{blogPost.content}</h4>
                    </div>
                )) : null
            }
        </div>
        <div>
            <Comments comments={ comments } />
        </div>
        </div>
    )
}

export default Posts
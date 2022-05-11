import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Posts from './Posts'

const Blog = () => {
    const [blogposts, setBlogPosts] = useState([])
    const [selectedBlogPosts, setSelectedBlogPosts] = useState(null)

    const getBlogPosts = async () => {
        await axios.get(`http://localhost:3001/api/blogposts`).then(
            response =>
            setBlogPosts(response.data.blogposts))
    }
    useEffect(() => {
        getBlogPosts()
    }, [])

    return(
        <div>
            <Posts blogposts={ blogposts } />
        </div>
    )
}

export default Blog
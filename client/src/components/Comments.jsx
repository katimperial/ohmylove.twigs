import axios from "axios"
import React, { useEffect, useState } from 'react'

const Comments = () => {

    const [comments, setComments] = useState()

    const getComments = async () => {
        try {
            await axios.get(`http://localhost:3001/api/comments`).then(
                response => 
                setComments(response.data.comments))
        } catch(err) {
            console.log(err)
        }
    }

    const updateComment = async (id) => {
        try {
            await axios.put(`http://localhost:3001/api/comments/${id}`, {
                comments: content
            })
        } catch(err) {
            console.log(err)
        } window.location.reload()
    }

    const [content, setContent] = useState('')

    const deleteComment = async (id) => {
        console.log(id)
        try {
            await axios.delete(`http://localhost:3001/api/comments/${id}`)
        } catch(err) {
            console.log(err)
        } window.location.reload()
    }

    useEffect(() => {
        getComments()
    }, [])

    return (
        <div>
            {comments ?
                comments.map((comment) => (
                    <div key={comment.id} className="comments">
                        <p>{comment.content}</p>
                        <button onClick={()=>updateComment(comment._id)}>Edit Comment</button>
                        <input type="text" value={content} onChange={e => setContent(e.target.value)}/>
                        <button onClick={()=>deleteComment(comment._id)}>Delete Comment</button>
                    </div>
                )) : null 
            }
        </div>
    )

}

export default Comments
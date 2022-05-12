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

    useEffect(() => {
        getComments()
    }, [])

    const [newComment, setNewComment] = useState('')

    useEffect(() => {console.log(newComment)}, [newComment])

    const createComment = async () => {
        try {
            await axios.post(`http://localhost:3001/api/comments`, {
                comments: content,
                blog_id: '627bbeac5ff304158e00cd95'
            })
        } catch(err) {
            console.log(err)
        }
    }

    const [content, setContent] = useState('')

    const updateComment = async (id) => {
        try {
            await axios.put(`http://localhost:3001/api/comments/${id}`, {
                comments: content
            })
        } catch(err) {
            console.log(err)
        } window.location.reload()
    }


    const [displayUpdateComment, setDisplayUpdateComment] = useState(false)

    const toggleUpdateComment = () => {
        setDisplayUpdateComment(!displayUpdateComment)
    }

    const deleteComment = async (id) => {
        console.log(id)
        try {
            await axios.delete(`http://localhost:3001/api/comments/${id}`)
        } catch(err) {
            console.log(err)
        } window.location.reload()
    }

    return (
        <div>
            {comments ?
                comments.map((comment) => (
                    <div key={comment.id} className="comments">
                        <p>{comment.content}</p>
                        <label>
                            Add New Comment:
                            <input type="text" value={content} onChange={e => setNewComment(e.target.value)}/>
                        </label>
                        <button onClick={createComment} className="submitButton">Submit</button>
                        <button onClick={toggleUpdateComment}>{displayUpdateComment === false ? "Update Comment" : "No Thanks"}</button>
                        <div className="displayUpdateComment">
                            {displayUpdateComment ? 
                                <div>
                                    <input type="text" value={content} onChange={e => setContent(e.target.value)}/>
                                    <button onClick={()=>updateComment(comment._id)}>Submit</button>
                                </div>
                            : null}
                        </div>
                        <button onClick={()=>deleteComment(comment._id)}>Delete Comment</button>
                    </div>
                )) : null 
            }
        </div>
    )

}

export default Comments
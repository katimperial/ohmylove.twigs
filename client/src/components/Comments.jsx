import axios from "axios"
import React, { useEffect, useState } from 'react'

const Comments = (props) => {

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
            let res = await axios.post('http://localhost:3001/api/comments', {
                content: newComment,
                blog_id: '627bbeac5ff304158e00cd95'
            })
            console.log(res)
        } catch(err) {
            console.log(err)
        } window.location.reload()
    }

    const [content, setContent] = useState('')

    const updateComment = async (id) => {
        try {
            await axios.put(`http://localhost:3001/api/comments/${id}`, {
                content: content
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
            {
            
                props.comments.map((comment) => (
                    <div key={comment.id} className="comments">
                        <p>{comment.content}</p>
                        <div className="change-comment">
                            <button onClick={toggleUpdateComment} className="change-comment-button">{displayUpdateComment === false ? "Update" : "Nevermind" }</button>
                            <div className="displayUpdateComment">
                                {displayUpdateComment ? 
                                    <div>
                                        <input type="text" value={content} onChange={e => setContent(e.target.value)}/>
                                        <button onClick={()=>updateComment(comment._id)} className="change-comment-button">Submit</button>
                                    </div>
                                : null}
                            </div>
                            <button onClick={()=>deleteComment(comment._id)} className="change-comment-button">Delete</button>
                        </div>
                    </div>
                )) 
            }
            <label>
                Add New Comment:
                <input type="text" value={newComment} onChange={e => setNewComment(e.target.value)}/>
            </label>
            <button onClick={createComment} className="submitButton">Submit</button>
        </div>
    )

}

export default Comments
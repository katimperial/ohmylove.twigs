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

    return (
        <div>
            {comments ?
                comments.map((comment) => (
                    <div key={comment.id} className="comments">
                        <p>{comment.content}</p>
                    </div>
                )) : null 
            }
        </div>
    )

}

export default Comments
import axios from "axios"
import React, { useEffect, useState } from 'react'

const Videos = () => {

    const [videos, setVideos] = useState()

    const getVideos = async () => {
        try {
            await axios.get(`http://localhost:3001/api/vids`).then(
                response =>
                setVideos(response.data.videos))
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getVideos()
    }, [])

    return(
        <div>
            {videos ?
                videos.map((videos) => (
                    <div key={videos.id} className="video">
                        <iframe height="auto" width="auto"  
                            src={videos.video}>
                        </iframe>
                    </div>
                )) : null
            }
        </div>
    )

}

export default Videos
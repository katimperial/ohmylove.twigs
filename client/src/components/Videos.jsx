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
        <div className="Videos">
            <h1 className='header-text'>Videos</h1>
            <div className="video">
            {videos ?
                videos.map((videos) => (
                    <div key={videos.id}>
                        <iframe height="auto" width="auto" style={{display: 'block', maxWidth:'80%'}} className="indv-video"
                            src={videos.video}>
                        </iframe>
                    </div>
                )) : null
            }
            </div>
        </div>
    )

}

export default Videos
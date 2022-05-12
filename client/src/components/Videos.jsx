import axios from "axios"
import React, { useEffect, useState } from 'react'

const Videos = () => {

    const [videos, setVideos] = useState()

    const getVideos = async () => {
        try {
            await axios.get(`http://localhost:3001/api/videos`).then(
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
                        <iframe height="480" width="500"  
                            src={videos.video}>
                        </iframe>
                    </div>
                )) : null
            }
            <iframe height="480" width="500"  
                src="https://www.youtube.com/embed/il_t1WVLNxk">
            </iframe>
        </div>
    )

}

export default Videos
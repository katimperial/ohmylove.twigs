import axios from "axios"
import React, { useEffect, useState } from 'react'

const Gallery = (props) => {

    const [galleries, setGalleries] = useState()

    const getGalleries = async () => {
        try {
            await axios.get(`http://localhost:3001/api/gallery`).then(
                response =>
                setGalleries(response.data.gallery))
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getGalleries()
    }, [])

    return(
        <div>
            {galleries ?
                galleries.map((gallery) => (
                    <div key={gallery.id} className="gallery">
                        <img src={gallery.image} className="galleryImage" />
                        <h4>{gallery.photographer}</h4>
                    </div>
                )) : null
            }
        </div>
    )

}

export default Gallery
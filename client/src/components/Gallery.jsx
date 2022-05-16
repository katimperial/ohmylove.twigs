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
        <div className="Gallery-page">
            <h1 className='header-text'>Gallery</h1>
            <div className="gallery-block">
                {galleries ?
                    galleries.map((gallery) => (
                        <div key={gallery.id} className="gallery">
                            <img src={gallery.image} className="galleryImage" style={{display: 'block', maxWidth:'80%'}}/>
                            <p className="gallery-text">Photographer: {gallery.photographer}</p>
                        </div>
                    )) : null
                }
            </div>
        </div>
    )

}

export default Gallery;
import React from 'react'

const Maker = (props) => {
    const drop = e => {
        e.preventDefault();
        const image_id = e.dataTransfer.getData('image_id');

        const image = document.getElementById(image_id);
        image.style.display = 'block';

        e.target.appendChild(image)
    }

    const dragOver = e => {
        e.preventDefault();
    }

    return (
        <div id={props.id} className={props.className} onDrop={drop} onDragOver={dragOver}>
            { props.children }

        </div> 
    )
}

export default Maker
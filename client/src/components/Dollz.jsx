import React from "react";

const Dollz = (props) => {

    // const dragStart = e => {
    //     const target = e.target;

    //     e.dataTransfer.setData('image_id', target.id);

    //     setTimeout(() => {
    //         target.style.display = "block";
    //     }, 0);
    // }

    // const dragOver = e => {
    //     e.stopPropagation();
    // }

    return (
        <div id={props.id} className={props.className} draggable={props.draggable}>
            { props.children }
        </div>
    )
}

export default Dollz

// onDragStart={dragStart} onDragOver={dragOver}
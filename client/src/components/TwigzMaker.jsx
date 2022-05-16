import React, { useState } from 'react'

const TwigzMaker = () => {

    const [dressupState, setDressupState] = useState({
        hair: {current: 0, total: 4},
        clothes: {current: 0, total: 4},
        hats: {current: 0, total: 3},
    })

    function next(item){
        let next_num = dressupState[item].current + 1
        let new_current = next_num < dressupState[item].total ? next_num : 0
        setDressupState({
            ...dressupState,
            [item]: {
                current: dressupState[item].current = new_current,
                total: dressupState[item].total
            }
        })
    }


    return (
        <div className='Twigz-Maker'>
            <h1 className='header-text'>TwigzMaker</h1>
            <div id="container">
                <div id="background">
                    <div id="twigz"></div>
                    <div id="clothes" className={"clothes"+(dressupState["clothes"].current+1)}></div>
                    <div id="hair" className={"hair"+(dressupState["hair"].current+1)}></div>
                    <div id="hats" className={"hats"+(dressupState["hats"].current+1)}></div>
                </div>
                <div className='all-twigz-buttons'>
                    <button id="next-hair" className='twigz-button' onClick={() => next("hair")}>Next Hair</button>
                    <button id="next-outfit" className='twigz-button' onClick={() => next("clothes")}>Next Outfit</button>
                    <button id="next-hat" className='twigz-button' onClick={() => next("hats")}>Next Hat</button>
                </div>
            </div>
        </div>
    )
}

export default TwigzMaker
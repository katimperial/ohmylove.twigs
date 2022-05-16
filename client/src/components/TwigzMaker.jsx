import React, { useState } from 'react'
import Maker from './Maker'
import Dollz from './Dollz'

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
            {/* <main className='flexbox'>
                <Maker id="makerLeft" className="maker">
                    <Dollz id="twigz" className="doll" draggable="false">
                        <img src="https://i.imgur.com/Bh6zcpw.png"/>
                    </Dollz>
                </Maker>
                <Maker id="makerRight" className="maker">
                    <Dollz id="blonde-hair" className="doll" draggable="true">
                        <img src="https://i.imgur.com/312EaQd.png"/>
                    </Dollz>
                    <Dollz id="buns-hair" className="doll" draggable="true">
                        <img src="https://i.imgur.com/a6KFosd.png"/>
                    </Dollz>
                    <Dollz id="red-streaks-hair" className="doll" draggable="true">
                        <img src="https://i.imgur.com/7Ot9get.png"/>
                    </Dollz>
                    <Dollz id="boucher-outfit" className="doll" draggable="true">
                        <img src="https://i.imgur.com/s38p1mv.png"/>
                    </Dollz>
                    <Dollz id="hat-outfit" className="doll" draggable="true">
                        <img src="https://i.imgur.com/bgK3p3A.png"/>
                    </Dollz>
                    <Dollz id="pendulum-pants" className="doll" draggable="true">
                        <img src="https://i.imgur.com/wyYFPNR.png"/>
                    </Dollz>
                    <Dollz id="stage-outfit" className="doll" draggable="true">
                        <img src="https://i.imgur.com/PLXtYhC.png"/>
                    </Dollz>
                    <Dollz id="stage-outfit-hat" className="doll" draggable="true">
                        <img src="https://i.imgur.com/4KMEEIJ.png"/>
                    </Dollz>
                    <Dollz id="tricorner-hat" className="doll" draggable="true">
                        <img src="https://i.imgur.com/ZJVt6k6.png"/>
                    </Dollz>
                </Maker>
            </main> */}
        </div>
    )
}

export default TwigzMaker
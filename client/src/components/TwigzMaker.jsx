import React from 'react'
import Maker from './Maker'
import Dollz from './Dollz'

const TwigzMaker = () => {


    return (
        <div>
            <h1 className='header-text'>TwigzMaker</h1>
            <main className='flexbox'>
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
            </main>
        </div>
    )
}

export default TwigzMaker
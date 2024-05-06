import React from 'react'
import {useRef} from 'react'
import "./Testimonials.css"
import backbutton from "../../assets/backbutton.png"
import nextbutton from "../../assets/nextbutton.png"
import client1 from "../../assets/client1.jpg"
import client2 from "../../assets/client2.jpg"
import client3 from "../../assets/client3.jpg"
import client4 from "../../assets/client4.jpg"


const Testimonials = () => {

    const slider = useRef();
    let tx = 0


const slideForward = (event)=>{
    console.log("INITIAL TX", tx)
    if(tx > -50){
        tx -= 25
    }
    console.log("NEW TX", tx)
    slider.current.style.transform = `translateX(${tx}%)`
    console.log("NEW NEW TX", tx)


}

const slideBackward = ()=>{
    
}


    return (
        <div className= "testimonials">
            <img src={nextbutton} alt="" className='next-btn' onClick = {slideForward}/>
            <img src={backbutton} alt="" className='back-btn'onClick = {slideBackward}/>
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={client1} alt=''/>
                                <div>
                                    <h3 className = "wallis">John Smith</h3>
                                    <span>New York, USA</span>
                                </div>
                            </div>
                            <p>
                                "Ever since I discovered Peanut Pals, navigating through my peanut-related tech issues has become an absolute breeze! Their team's expertise and dedication are truly commendable."
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={client2} alt=''/>
                                <div>
                                    <h3>Bob Burquist</h3>
                                    <span>California, USA</span>
                                </div>

                            </div>
                            <p>
                            "Ever since I discovered Peanut Pals, navigating through my peanut-related tech issues has become an absolute breeze! Their team's expertise and dedication are truly commendable." 
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={client3} alt=''/>
                                <div>
                                    <h3>Alien Guy</h3>
                                    <span>Arkansas, USA</span>
                                </div>
                            </div>
                            <p>
                            "Ever since I discovered Peanut Pals, navigating through my peanut-related tech issues has become an absolute breeze! Their team's expertise and dedication are truly commendable." 
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={client4} alt=''/>
                                <div>
                                    <h3>Human Guy</h3>
                                    <span>Texas, USA</span>
                                </div>
                            </div>
                            <p>
                            "Ever since I discovered Peanut Pals, navigating through my peanut-related tech issues has become an absolute breeze! Their team's expertise and dedication are truly commendable." 
                            </p>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Testimonials
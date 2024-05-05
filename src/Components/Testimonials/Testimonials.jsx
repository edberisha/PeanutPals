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
    let tx=0;

    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;
        } else {
            tx = 0; // Reset tx to 0 when it reaches -50
        }
        console.log("tx:", tx); // Log the value of tx
        slider.current.style.transform = `translateX(${tx}%)`;
    };

    const slideBackward= ()=>{
        if(tx < 0){
            tx += 25
        }
        slider.current.style.transform = `translateX(${tx}%)`

    }
    
    return (
        <div className= "testimonials">
            <img src={nextbutton} alt="" className='next-btn' onClick={slideForward}/>
            <img src={backbutton} alt="" className='back-btn' onClick={slideBackward}/>
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={client1} alt=''/>
                                <div>
                                    <h3>John Smith</h3>
                                    <span>New York, USA</span>
                                </div>
                                <p>
                                "Ever since I discovered Peanut Pals, navigating through my peanut-related tech issues has become an absolute breeze! Their team's expertise and dedication are truly commendable. 
                                </p>
                            </div>
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
                                <p>
                                "Peanut Pals has been a game-changer for me! As someone who relies heavily on peanut-related technology for both work and leisure, encountering technical glitches used to be a major headache. But ever since I started using Peanut Pals' services, those issues have become a thing of the past. </p>
                            </div>
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
                                <p>
                                "Peanut Pals has truly revolutionized the way I interact with peanut-related technology! From the moment I reached out for assistance, their team exhibited unmatched professionalism and proficiency. </p>
                            </div>
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
                                <p>
                                "Peanut Pals is simply phenomenal! As someone who relies on peanut-related technology daily, finding a reliable support service was paramount. Enter Peanut Pals, and my tech worries vanished like magic peanuts disappearing at snack time!     </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Testimonials
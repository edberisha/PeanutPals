import React from 'react'
import './Programs.css'
import Program1 from "../../assets/img1.jpg"
import Program2 from "../../assets/img10.jpg"
import Program3 from "../../assets/img3.jpg"

const Programs = () => {
    return (
        <div className = "programs" >
            <div className='program'>
                <img src={Program1} alt=''/>
                <div className='caption'>
                    <i className="fa-solid fa-check"></i>
                    <p>Red-Head Protection</p>
                    <p>(Standard)</p>
                </div>
            </div>
            <div className='program'>
                <img src={Program2} alt=''/>
                <div className='caption'>
                    <i className="fa-solid fa-check-double"></i>
                    <p>Spy-Baby Protection</p>
                    <p>(Premium)</p>
                </div>
            </div>
            <div className='program'>
                <img src={Program3} alt=''/>
                <div className='caption'>
                    <i className="fa-solid fa-cat"></i>
                    <p>Kitty-Cat Protection</p>
                    <p>(Ultra)</p>
                </div>
            </div>
        </div>
    )
}

export default Programs
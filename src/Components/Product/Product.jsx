import React from 'react'
import './Product.css'
import product1 from "../../assets/tool1.png"
import product2 from "../../assets/tool2.png"
import product3 from "../../assets/tool3.png"
import product4 from "../../assets/tool4.png"


const Product = ()=>{
    return (
        <div className="product">
            <div className='gallery'>
                <img src = {product1} alt=''/>
                <img src = {product2} alt=''/>
                <img src = {product3} alt=''/>
                <img src = {product4} alt=''/>
            </div>
            <button className="btn dark-btn">See more here</button>

        </div>
    )
}

export default Product
import React from 'react'
import './Product.css'
import product1 from "../../assets/img7.jpg"
import product2 from "../../assets/img8.jpg"
import product3 from "../../assets/img9.jpg"
import product4 from "../../assets/img11.jpg"


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
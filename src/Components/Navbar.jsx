import React from 'react'
import './Navbar.css'
import {useState, useEffect} from 'react'

const Navbar = () => {

        const [sticky, setSticky] = useState(false)

        useEffect(()=>{
            window.addEventListener('scroll', ()=> {
                window.scrollY > 600 ? setSticky(true) : setSticky(false)
            })
        },[])

    return (
        <div>
            <nav className={`container ${sticky? 'dark-nav' : ''}`}>
                <div className="icon-container" style={{ fontFamily: 'Roboto, sans-serif', fontSize: '3em', color: 'white' }}>
                    <i className="fa-solid fa-layer-group" style={{ marginRight: '5px' }} />
                    <span>Peanut Pals Inc.</span>
                </div>
                <ul className="nav-list">
                    <li>Home</li>
                    <li>Program</li>
                    <li>About Us</li>
                    <li>Our Product</li>
                    <li>Testimonials</li>
                    <li><button className="btn">Contact Us</button></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
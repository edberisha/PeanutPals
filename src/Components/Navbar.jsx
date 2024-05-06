import React from 'react'
import './Navbar.css'
import {useState, useEffect} from 'react'
import { Link as ScrollLink } from 'react-scroll';


const Navbar = () => {



        const [sticky, setSticky] = useState(false)

        useEffect(()=>{
            window.addEventListener('scroll', ()=> {
                window.scrollY > 600 ? setSticky(true) : setSticky(false)
            })
        },[])

        const [mobileMenu, setMobileMenu] = useState(false)
        const toggleMenu = ()=>{
            mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
        }

    return (
        <div>
            <nav className={`container ${sticky? 'dark-nav' : ''}`}>
                <div className="icon-container" style={{ fontFamily: 'Roboto, sans-serif', fontSize: '2em', color: 'white' }}>
                    <i className="fa-solid fa-layer-group" style={{ marginRight: '5px' }} />
                    <span>Peanut Pals Inc.</span>
                </div>
                <ul className={mobileMenu? '':'hide-mobile-menu'}>
                    <li><ScrollLink to="hero" smooth={true} offset={0} duration={500}>Home</ScrollLink></li>
                    <li><ScrollLink to="program" smooth={true} offset={-260} duration={500}>Program</ScrollLink></li>
                    <li><ScrollLink to="about" smooth={true} offset={-100} duration={500}>About Us</ScrollLink></li>
                    <li><ScrollLink to="product" smooth={true} offset={-230} duration={500}>Our Product</ScrollLink></li>
                    <li><ScrollLink to="testimonials" smooth={true} offset={-250} duration={500}>Testimonials</ScrollLink></li>
                    <li><ScrollLink to="contact" smooth={true} offset={-280} duration={500}><button className="btn">Contact Us</button></ScrollLink></li>
                </ul>
                <i onClick = {toggleMenu} class="fa-solid fa-bars"></i>
            </nav>
        </div>
    );
};

export default Navbar;
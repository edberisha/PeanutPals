import React from 'react'
import './About.css'
import Team from "../../../src/assets/aboutus.jpg"
import playbutton from "../../assets/playbutton.png"

const About = () => {
    return (
        <div className='about'>
            <div className = 'about-left'>
                <img src={Team} alt=''/>
                <img className='i' src={playbutton} alt='' style={{ width: '150px' }} /></div>
            <div className = 'about-right'>
                <h3>ABOUT OUR TEAM</h3>
                <h2>Making Peanut Stuff One Step at a Time</h2>
                <p>At Peanut Pals Inc., we pride ourselves on our innovative approach to crafting stuffed cats that go beyond mere toys – they're companions that enrich the lives of our users and clients in unique ways. Our journey began with a simple idea: harnessing the natural allure of peanuts to create stuffed animals imbued with a special magic. What started as a passion project soon evolved into a mission to revolutionize the toy industry by infusing our creations with interactive features that promote companionship and comfort.</p>
                <p>At the heart of our company's ethos lies a commitment to harnessing the power of nature's bounty to enhance the well-being of our customers. By incorporating peanuts into our stuffed cats' designs, we tap into their natural properties to evoke feelings of warmth and reassurance. The comforting scent of peanuts, coupled with the plush softness of our toys, creates an irresistible allure that provides solace and joy to users of all ages.</p>
                <p>But our dedication to innovation doesn't stop there. We've taken our commitment to enhancing user experience to new heights by training our staffed cats to respond to the needs of our clients. Through cutting-edge technology and rigorous training programs, our team of feline companions is equipped to provide personalized assistance and emotional support, making every interaction with our products a truly enriching experience. At Peanut Pals Inc., we're not just making toys – we're fostering connections, spreading happiness, and shaping a brighter future, one peanut at a time.</p>
            </div>
        </div>
    )
}

export default About
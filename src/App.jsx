import React from 'react'
import Navbar from './Components/Navbar'
import Hero from "./Components/Hero/Hero"
import './Components/index.css'
import Programs from './Components/Programs/Programs'
import Title from "./Components/Title/Title"
import About from './Components/About/About'
import Product from './Components/Product/Product'
import Testimonials from './Components/Testimonials/Testimonials'
import ContactUs from './Components/Contact Us/ContactUs'
import Footer from './Components/Footer/Footer'
import ReactGA from 'react-ga';

function initializeReactGA() {
  ReactGA.initialize('G-JJ1QFNENSP'); // Replace with your Measurement ID
  ReactGA.pageview(window.location.pathname + window.location.search);
}

function App() {
  
  useEffect(() => {
    initializeReactGA();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our Program" Title="What We Offer"/>
        <Programs/>
        <About />
        <Title subTitle="GALLERY" Title="Product Photos"/>
        <Product />
        <Title subTitle="Testimonials" Title="What Clients Say"/>
        <Testimonials/>
        <Title subTitle="Contact Us" Title="Get in Touch"/>
        <ContactUs/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;

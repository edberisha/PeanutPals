import React from 'react'
import './ContactUs.css'
import message from '../../assets/message.png'

const ContactUs = ()=>{

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "abfa6595-d657-4381-bac5-2b9eb6d1be0e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }

  };
    return (
        <div className="contact">
            <div className="contact-col">
                <h3>Send us a message <img src={message}/></h3>
                <p>Feel free to reach out to us through our contact form. Your feedback, questions, and stuff is appreciated.</p>
                <ul>
                    <li> <i class="fa-regular fa-envelope" style = {{marginRight: '5px'}}></i> Contact@PeanutPals.com</li>
                    <li> <i class="fa-solid fa-phone"></i> + 1 555-555-5555</li>
                    <li><i class="fa-solid fa-location-dot" style = {{marginRight: '5px'}}></i>Nyack, New Fornia <br/>FD 55555, United States</li>
                </ul>
            </div>
            <div className = "contact-col">
                <form onSubmit={onSubmit}>
                    <label>Name</label>
                    <input type="text" name="name" required/>
                    <label>Phone Number</label>
                    <input type="tel" name="phone" required/>
                    <label>Write Your Message Here</label>
                    <textarea name="" id="" rows="6" required></textarea>
                    <button type="submit" className="btn dark-btn">Submit</button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default ContactUs
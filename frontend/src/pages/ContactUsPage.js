
import React from 'react';
import '../index.css'; 
import NavBar from '../components/NavBar';

const ContactUsPage = (props) => {
    return (
        <div>
            <NavBar />
            <h1 className="contactHeading">Contact Us</h1>
            <div className="contactContainer">
                <div className="contactInfo">
                    <p>
                        <span className="contactLabel">Address:</span> 123 Medical Lane, Healthville, HV 12345
                        <br />
                        <span className="contactLabel">Phone:</span> +1 (555) 123-4567
                        <br />
                        <span className="contactLabel">Email:</span> info@docappointments.com
                        <br />
                        <span className="contactLabel">Hours:</span> Mon - Fri: 9:00am - 6:00pm
                    </p>
                </div>
            </div>

            <h2 className="contactHeading">Get In Touch</h2>
            <div className="contactFormContainer">
                <form className="contactForm">
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Your Message" rows="6" required></textarea>
                    <button className="btn">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ContactUsPage;

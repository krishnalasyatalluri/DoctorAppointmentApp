import React, { useState } from 'react';
import { Container, Button, Collapse } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css' // Create a separate CSS file for styling
import NavBar from '../components/NavBar';

const AboutUsPage = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Container className="about-us-container">
      <div className="about-us-content">
        <h1>About Us</h1>
        <span>
          We are dedicated to improving healthcare accessibility and enhancing patient experience.
          Our mission is to connect patients with healthcare professionals seamlessly, making doctor
          appointments convenient, reliable, and efficient.
        </span>
        <Collapse isOpen={isOpen}>
          <div>

            <p>
              At DocAppointments.com, we believe in the power of accessible healthcare. Our team of
              experienced healthcare professionals and tech enthusiasts work tirelessly to provide
              you with a seamless healthcare experience. We prioritize your well-being and
              convenience above all else.
            </p>
            <p>
              Our user-friendly platform allows you to book appointments with skilled doctors,
              receive timely reminders, and access your medical history securely. We adhere to the
              highest standards of data security to ensure your personal information remains
              confidential.
            </p>
            <p>
              Join us in our journey to transform healthcare delivery. Your health is our priority,
              and we are here to support you every step of the way.
            </p>
          </div>
        </Collapse><br />
        <Button onClick={toggle} className="read-more-button">
          {isOpen ? 'Read Less' : 'Read More'}
        </Button>
      </div>
    </Container>
  );
};

export default AboutUsPage
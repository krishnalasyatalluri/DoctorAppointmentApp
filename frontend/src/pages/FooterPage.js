// const FooterPage=()=>{
//     return(
//         <div>
//             Footer Page
//         </div>
//     )
// }
// export default FooterPage
import React from 'react';
import '../index.css'; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>Email: docappointments@info.com</p>
          <p>Phone: +91 8888888888</p>
        </div>
        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/appointments">Appointments</a></li>
            <li><a href="/doctors">Doctors</a></li>
            <li><a href="/about">About Us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Follow Us</h2>
          <ul className="social-icons">
            <li><a href="#" className="facebook">Facebook</a></li>
            <li><a href="#" className="twitter">Twitter</a></li>
            <li><a href="#" className="linkedin">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 DOCAPPOINTMENTS.COM. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

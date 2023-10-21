import React from 'react';
import '../index.css';
import {Link} from 'react-router-dom'
import NavBar from '../components/NavBar';
import "../images/doctor-pointing.jpg"

const LandingPage = (props) => {
    const handleClick = () => {
        props.history.push('/register')
    }

    return (
        <div>
            <NavBar />
            < header className="header" >
                <div className="content">
                    <h1><span>Get Swift Care</span><br />Your Health,Our Priority</h1>
                    <p>
                        "In our fast-paced world, swift access to medical care is crucial.
                        Whether it's a medical emergency or routine check-up,
                        timely medical services make a difference.
                        At DocAppointments.com, we prioritize your well-being.
                        Book appointments seamlessly, ensuring your health is in safe hands."
                    </p>
                    <button className="btn success" onClick={handleClick}>Get Started</button>
                </div>
                <div className="image">
                    <span className="image__bg"></span>
                    <img src='../images/doctor-pointing.jpg' alt="header image" />
                    {/* <div className="image__content image__content__1">
                        <span><i className="ri-user-3-line"></i></span>
                        <div className="details">
                            <h4>1520+</h4>
                            <p>Active Clients</p>
                        </div>
                    </div>
                    <div className="image__content image__content__2">
                        <ul>
                            <li>
                                <span><i className="ri-check-line"></i></span>
                                Expert Doctors
                            </li>
                        </ul>
                    </div> */}
                </div>
            </header >
        </div >
    );
};

export default LandingPage;

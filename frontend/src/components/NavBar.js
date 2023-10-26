import { Link, Route } from "react-router-dom"
const NavBar = (props) => {
    const userRole = localStorage.getItem('role')
    return (
        <div>
            {userRole === 'admin' ? (
                <nav>
                <div className="nav__logo">DOCAPPOINTMENTS.COM</div>
                <ul className="nav__links">
                    <li className="link"><Link to="/home" >Home</Link></li>
                    <li className="link"><Link to="/doctors" >Doctors</Link></li>
                    <li className="link"><Link to="/patients">Patients</Link></li>
                    <li className="link"><Link to="/bookings">Bookings</Link></li>
                    <li className="link"><Link to="/profile">Profile</Link></li>
                    <li className="link"><Link to="/enquiries">Enquiries</Link></li>
                    <li className="link"><Link to="/logout">Logout</Link></li>

                </ul>
                
            </nav>
            ) : userRole === 'doctor' ? (
                <nav>
                    <div className="nav__logo">DOCAPPOINTMENTS.COM</div>
                    <ul className="nav__links">
                        <li className="link"><Link to="/home" >Home</Link></li>
                        <li className="link"><Link to="/aboutus" >About Us</Link></li>
                        <li className="link"><Link to="/contactus">Contact Us</Link></li>
                        <li className="link"><Link to="/bookings">Bookings</Link></li>
                        <li className="link"><Link to="/profile">Profile</Link></li>
                        <li className="link"><Link to="/slots">Slots</Link></li>
                        <li className="link"><Link to="/logout">Logout</Link></li>

                    </ul>
                    
                </nav>
                // <nav class="navbar navbar-expand-lg navbar-light bg-light">
                //     <div class="container-fluid">
                //         <a class="navbar-brand" href="#">DOCAPPOINTMENTS.COM</a>
                //         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                //             <span class="navbar-toggler-icon"></span>
                //         </button>
                //         <div class="collapse navbar-collapse" id="navbarNav">
                //             <Link to="/home" className="navItem">Home</Link>
                //             <Link to="/aboutus" className="navItem">About Us</Link>
                //             <Link to="/contactus" className="navItem">Contact Us</Link>
                //             <Link to="/bookings" className="navItem">Bookings</Link>
                //             <Link to="/profile" className="navItem">Profile</Link>
                //             <Link to="/enquiries" className="navItem">Enquiries</Link>
                //             <Link to="/logout" className="navItem">Logout</Link>



                //         </div>
                //     </div>
                // </nav>
            ) : userRole === 'patient' ? (
                <nav>
                    <div className="nav__logo">DOCAPPOINTMENTS.COM</div>
                    <ul className="nav__links">
                        <li className="link"><Link to="/home" >Home</Link></li>
                        <li className="link"><Link to="/aboutus" >About Us</Link></li>
                        <li className="link"><Link to="/contactus">Contact Us</Link></li>
                        <li className="link"><Link to="/bookings">Bookings</Link></li>
                        <li className="link"><Link to="/profile" className="navItem">Profile</Link></li>
                        <li className="link"><Link to="/logout" className="navItem">Logout</Link></li>

                    </ul>
                    
                </nav>
            ) : (
                <nav>
                    <div className="nav__logo">DOCAPPOINTMENTS.COM</div>
                    <ul className="nav__links">
                        <li className="link"><Link to="/home" >Home</Link></li>
                        <li className="link"><Link to="/aboutus" >About Us</Link></li>
                        <li className="link"><Link to="/contactus">Contact Us</Link></li>
                        <li className="link"><Link to="/login">Login</Link></li>
                        {/* <li className="link"><Link to="/register" >Register</Link></li> */}

                    </ul>
                    <button className="btn"><Link to="/register" >Register</Link></button>
                </nav>

            )
            }
        </div>
    )
}


export default NavBar
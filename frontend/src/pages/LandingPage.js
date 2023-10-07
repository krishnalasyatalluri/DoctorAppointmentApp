import { Link } from "react-router-dom"

const LandingPage=(props)=>{
    
    return(
        <div>
            <div className="logo">
                <p>DocAppointments.com</p>

            </div>
            <div className="center-content">
                <p>Explore Doctors</p>
                <p>your reliable companion for seamless doctor appointment bookings</p>
                <p>welcome</p>

            </div>
            <div className="get-started">
                <button><Link to="/home">Get started</Link></button>
                {/* <button onClick={handleClick}>Get started</button> */}
            </div>
        </div>
    )
}
export default LandingPage
import NavBar from "./components/NavBar"
import HomePage from "./pages/HomePage"
import LandingPage from "./pages/LandingPage"
import { Link, Route } from "react-router-dom"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import DoctorsPage from "./pages/DoctorsPage"
import LogoutPage from "./pages/LogoutPage"
import ProfilePage from "./pages/ProfilePage"
import ContactUsPage from "./pages/ContactUsPage"
import ConfirmationPage from "./pages/ConfirmationPage"
import BookingsPage from "./pages/BookingsPage"
import AboutUsPage from "./pages/aboutUsPage"
import CategoryList from "./components/categoryList"
import { Router } from "react-router-dom/cjs/react-router-dom.min"
const App = (props) => {
  return (
    <div>
        <Route path="/" component={LandingPage} exact={true} />
        <Route path="/home" component={HomePage} exact={true} />
        <Route path="/register" component={RegisterPage} exact={true} />
        <Route path="/login" component={LoginPage} exact={true} />
        <Route path="/doctors" component={DoctorsPage} exact={true} />
        <Route path="/logout" component={LogoutPage} exact={true} />
        <Route path="/aboutus" component={AboutUsPage} exact={true} />
        <Route path="/profile" component={ProfilePage} exact={true} />
        <Route path="/contactus" component={ContactUsPage} exact={true} />
        <Route path="/bookings" component={BookingsPage} exact={true} />



    </div >
  )
}
export default App
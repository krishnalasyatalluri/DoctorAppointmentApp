import { useDispatch, useSelector } from 'react-redux'
import { useState, useRef } from 'react'
import { asyncUserLogin } from '../redux/actions/userLoginActions'
import NavBar from '../components/NavBar'
import '../index.css'

import validator from 'validator'
import Footer from './FooterPage'
const LoginPage = (props) => {
    const passwordRef = useRef()
    const dispatch = useDispatch()
    // const loginError = useSelector((state) => state.usersReducer.error);
    const loginInfo = useSelector((state) => {
        return state.loginInfo
    })
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [formError, setFormError] = useState({})
    const errors = {}
    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const runValidation = () => {
        if (username.trim().length === 0) {
            errors.username = "username can't be blank"
        }
        if (password.trim().length === 0) {
            errors.password = "password can't be blank and at least 8 character long"
        } else if (!validator.isStrongPassword(password)) {
            errors.password = 'the password should be 8 characters long at least 1 capital letter 1 lowercase letter 1 special character/symbol(@/-*) 1 numeric character'
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        runValidation()
        if (Object.keys(errors).length === 0) {
            setFormError({})
            const logInData = {
                username: username,
                password: password
            }
            dispatch(asyncUserLogin(logInData, props))
            setUsername('')
            setPassword('')
            // const reset = () => {
            //     setUsername('')
            //     setPassword('')
            // }
            // reset()
        } else {
            console.log(formError)
            setFormError(errors)
        }

    }
    // console.log(loginInfo)
    const redirect = () => {
        props.history.push('/register')
    }
    // const showHidePassword = () => {
    //     if (passwordRef.current.type === 'password') {
    //         passwordRef.current.type = 'text'
    //     } else {
    //         passwordRef.current.type = 'password'
    //     }
    // }
    return (


        <div >

            <div className="login-container">
                <div className="login-form">
                    <form onSubmit={handleSubmit}>
                        <h2 className="login-heading">Login</h2>
                        <input type="text" placeholder="Username" className="login-input" onChange={handleUsernameChange} />
                        {formError.username && <span className="error-message">{formError.username}</span>}
                        <input type="password" placeholder="Password" className="login-input" onChange={handlePasswordChange} ref={passwordRef} />
                        {formError.password && <span className="error-message">{formError.password}</span>}
                        <div className="checkbox-container">
                            <input type="checkbox" className="checkbox" />
                            <span className="checkbox-label">I agree to the terms & conditions</span>
                        </div>
                        <input type="submit" value="Login" className="login-button" />
                        <p className="register-link" onClick={redirect}>New user? <button className="register-button">Register</button></p>
                        <p className="footer-text">All rights reserved</p>
                    </form>
                </div>
            </div>
            <Footer />

        </div>
    )
}
export default LoginPage
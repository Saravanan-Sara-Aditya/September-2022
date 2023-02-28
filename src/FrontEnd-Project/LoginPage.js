import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../Css/login.css"
const Login_page = () => {

    const history = useHistory()
    const [formdata, setFormdata] = useState({
        email: '',
        password: ''
    })

    const [formErrors, setFormErrors] = useState({
        emailError: '',
        passwordError: ''
    })

    const [showhome, setShowHome] = useState(false)

    const localemail = sessionStorage.getItem('email');
    const localpassword = sessionStorage.getItem('password')


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata({ ...formdata, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formdata));


        if (formdata.email === localemail && formdata.password === localpassword) {
            sessionStorage.setItem("signUp", formdata.email)
            setShowHome(true);
        } else {
            alert('Please Enter valid credential')
        }

    }

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!values.email) {
            errors.emailError = "*Email is required!*";
        } else if (!regex.test(values.email)) {
            errors.emailError = "*This is not a valid email format!*";
        }
        if (!values.password) {
            errors.passwordError = "*Password is required*";
        } else if (values.password.length < 4) {
            errors.passwordError = "*Password must be more than 4 characters*";
        } else if (values.password.length > 10) {
            errors.passwordError = "*Password cannot exceed more than 10 characters*";
        }


        return errors;
    }
    return (
        <body className="body">
            {
                showhome ? history.push('/home') :
                    <div className="center">
                        <h1>Login</h1>
                        <form method="post" onSubmit={handleSubmit}>
                            <div className="txt_field">
                                <input
                                    name="email"
                                    type='text'
                                    value={formdata.email}
                                    placeholder='Enter Your E-mail'
                                    onChange={handleChange}
                                />
                                <span></span>
                                <label>Username</label>
                            </div>
                            <small>{formErrors.emailError}</small>
                            <div className="txt_field">
                                <input
                                    name="password"
                                    type='password'
                                    value={formdata.password}
                                    placeholder='Enter Your Password'
                                    onChange={handleChange}
                                />
                                <span></span>
                                <label>Password</label>
                            </div>
                            <small>{formErrors.passwordError}</small>
                            <input id='submit' type='submit' value='login' />
                            <div className="signup_link">
                                Not a Member?<a href="#"><Link to='/Register_page'>Sign-Up</Link></a>
                            </div>
                        </form>
                    </div>
            }
        </body>
    )
}
export default Login_page
import React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

function Register() {
    const history = useHistory();

    const [formdata, setFormdata] = useState({
        name: '',
        email: '',
        password: ''
    })

    const [formErrors, setFormErrors] = useState({
        nameError: '',
        emailError: '',
        passwordError: ''
    })

    const localSignup = sessionStorage.getItem('email');

    const [showlogin, setShowLogin] = useState(false)

    useEffect(() => {
        if (localSignup) {
            setShowLogin(true)
        }
    }, [localSignup])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata({ ...formdata, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formdata));
        if (formdata.name && formdata.email && formdata.password) {
            sessionStorage.setItem("name", formdata.name)
            sessionStorage.setItem("email", formdata.email)
            sessionStorage.setItem("password", formdata.password)
            sessionStorage.setItem("signUp", formdata.email)
            alert("Account created successfully!!")
            window.location.reload()
        }
    }

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!values.name) {
            errors.nameError = "*Name is required!*";
        }
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
        <>
            {
                showlogin ? history.push('/login_page') :
                    <div className="container">
                        <h1 className="text-danger">Create Your Account</h1>
                        <form autoComplete="off" onSubmit={handleSubmit}>
                            <div className='form-group'>
                                <label className="text-light">Username:</label>
                                <input className="form-control"
                                    onChange={handleChange}
                                    name='name'
                                    value={formdata.name}
                                    type='text'
                                    placeholder="Enter Your Username" />
                                <div className='text-danger'>{formErrors.nameError}</div>
                                <br></br>
                                <label className="text-light">E-mail:</label>
                                <input className="form-control"
                                    onChange={handleChange}
                                    name='email'
                                    type='text'
                                    value={formdata.email}
                                    placeholder="Enter Your E-mail"
                                />
                                <div className='text-danger'>{formErrors.emailError}</div>

                                <br></br>
                                <label className="text-light">Password:</label>
                                <input className="form-control"
                                    onChange={handleChange}
                                    name='password'
                                    type='password'
                                    value={formdata.password}
                                    placeholder="Enter Your New Password" />
                                <div className='text-danger'>{formErrors.passwordError}</div>
                                <br></br>
                                <br></br>
                                <input className="btn btn-danger" type='submit' value='Sumbit' />
                                {' '}
                                <Link to='/login_page'><input className="btn btn-secondary" type='button' value='Cancel' /></Link>
                            </div>
                        </form>
                    </div>
            }
        </>
    )
}
export default Register
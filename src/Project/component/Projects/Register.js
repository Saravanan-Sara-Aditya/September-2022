import React from "react";
import Login_page from "./LoginPage";
import { Link } from "react-router-dom";
import * as yup from 'yup'
import { useFormik } from 'formik'
function Register() {
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
        },
        validationSchema: yup.object({
            username: yup.string().
                required("Name is Required")
                .strict()
                .trim("Must not contain spaces")
                .min(3, "Minimum 3 Charcters Required")
                .max(15, "Maximum 15 Charcters Required"),
            email: yup.string()
                .required('Email is Required')
                .email("Please Enter a Valid E-mail")
                .strict()
                .trim("Must not contain spaces")
            ,
            password: yup.string()
                .required("Password is Required")
                .strict()
                .trim("Must not contain spaces")
                .min(8, "Minimum 8 Charcters")
                .max(15, "Maximum 15 Charcters Requried"),
        }),
        onSubmit: (initialValues) => {
            localStorage.setItem("username", initialValues.username);
            localStorage.setItem("E-mail", initialValues.email);
            localStorage.setItem("password", initialValues.password);
            var personName = localStorage.getItem("username", "E-mail", "password");
            console.log(personName)
        },
    })
    return (
        <div className="container">
            <h1 className="text-danger">Create Your Account</h1>
            <form autoComplete="off" onSubmit={formik.handleSubmit}>
                <div className='form-group'>
                    <label className="text-light">Username:</label>
                    <input
                        className="form-control"
                        onChange={formik.handleChange}
                        name='username'
                        value={formik.values.username}
                        type='text'
                        placeholder="Enter Your Username" />
                    {formik.errors.username ? <div className='text-danger'>{formik.errors.username}</div> : null}
                    <br></br>
                    <label className="text-light">E-mail:</label>
                    <input className="form-control"
                        onChange={formik.handleChange}
                        name='email'
                        type='email'
                        value={formik.values.email}
                        placeholder="Enter Your E-mail"
                    />
                    {formik.errors.email ? <div className='text-danger'>{formik.errors.email}</div> : null}

                    <br></br>
                    <label className="text-light">Password:</label>
                    <input className="form-control"
                        onChange={formik.handleChange}
                        name='password'
                        type='password'
                        value={formik.values.password}
                        placeholder="Enter Your New Password" />
                    {formik.errors.password ? <div className='text-danger'>{formik.errors.password}</div> : null}
                    <br></br>
                    <br></br>
                    <input className="btn btn-danger" type='submit' value='Sumbit' />
                    {' '}
                    <Link to='/login_page'><input className="btn btn-secondary" type='button' value='Cancel' /></Link>
                </div>
            </form>
        </div>

    )
}
export default Register
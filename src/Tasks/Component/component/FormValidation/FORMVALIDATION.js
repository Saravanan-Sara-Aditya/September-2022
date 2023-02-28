import React from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'
function Form_box() {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            number: '',
        },
        validationSchema: yup.object({
            name: yup.string().
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
        })
        ,
        onSubmit: (userInputdata) => {
            console.log(userInputdata)
        }
    })
    return (
        <div className='container'>
            <h1 className='text-primary'>FORM VALIDATION</h1>
            <form autoComplete='off' onSubmit={formik.handleSubmit}>
                <div className='form-group'>
                    <label className='text-primary'>Username:</label>
                    <input
                        className='form-control'
                        type='text'
                        name='name'
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        placeholder='Enter Username' />
                    {formik.errors.name ? <div className='text-danger'>{formik.errors.name}</div> : null}
                    <label className='text-primary'>E-mail:</label>
                    <input
                        className='form-control'
                        type='email'
                        name='email'
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        placeholder='Enter Your E-mail' />
                    {formik.errors.email ? <div className='text-danger'>{formik.errors.email}</div> : null}
                    <label className='text-primary'>Password:</label>
                    <input
                        className='form-control'
                        type='password'
                        name='password'
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        placeholder='Enter Your Password' />
                    {formik.errors.password ? <div className='text-danger'>{formik.errors.password}</div> : null}
                    <label className='text-primary'>Gender:</label>
                    <br></br>
                    <input type='radio' name='gender' />Male
                    <br></br>
                    <input type='radio' name='gender' />Female
                    <br></br>
                    <label className='text-primary'>Country:</label>
                    <br></br>
                    <select name='country'>
                        <option>Select Your Country</option>
                        <option>India</option>
                        <option>England</option>
                        <option>United Arab Emirates</option>
                    </select>
                    <br></br>
                    <br></br>
                    <label className='text-primary'>Mobile:</label>
                    <input
                        className='form-control'
                        type='number'
                        name='number'
                        onChange={formik.handleChange}
                        value={formik.values.number}
                        placeholder='Enter Your Mobile No' />
                    {formik.errors.number ? <div className='text-danger'>{formik.errors.number}</div> : null}
                    <br></br>
                    <input className='btn btn-primary' type='submit' />
                </div>
            </form>
        </div>
    )
}
export default Form_box
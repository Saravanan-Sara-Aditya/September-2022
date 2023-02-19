import React from "react";
import { Link } from "react-router-dom";
import "../../Css/login.css"
function Login_page() {
    return (
        <body className="body">
            <div className="center">
                <h1>Login</h1>
                <form method="post">
                    <div className="txt_field">
                        <input type='text' required />
                        <span></span>
                        <label>Username</label>
                    </div>
                    <div className="txt_field">
                        <input type='password' required />
                        <span></span>
                        <label>Password</label>
                    </div>
                    <div className="pass">Forgot Password?</div>
                    <input id='submit' type='submit' value='login' />
                    <div className="signup_link">
                        Not a Member?<a href="#"><Link to='/Register_page'>Sign-Up</Link></a>
                    </div>
                </form>
            </div>
        </body>
    )
}
export default Login_page
import React, { useState } from "react";
function FormValidation() {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [usernameErr, setusernameErr] = useState(false);
    const [passwordErr, setpasswordErr] = useState(false);
    function validate() {
        if (username.trim().length === 0) {
            setusernameErr(true)
        }
        else {
            setusernameErr(false)
        }
        if (password.trim().length === 0) {
            setpasswordErr(true)
        }
        else {
            setpasswordErr(false)
        }
    }
    return (
        <div>
            <label>Username:</label>
            <input
                type='text'
                value={username}
                onChange={(e) => setusername(e.target.value)}
            />
            {usernameErr && <p>Please Enter a Valid Username</p>}
            <br></br>
            <br></br>
            <label>Password:</label>
            <input
                type='password'
                value={password}
                onChange={(e) => setpassword(e.target.value)}
            />
            {passwordErr && <p>Please Enter a Valid Password</p>}
            <br></br>
            <br></br>
            <button onClick={validate}>Login</button>
        </div>
    )
}
export default FormValidation
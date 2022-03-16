import React, { useState } from 'react';
import './signup.css'
import { useMutation } from '@apollo/client'
import { ADD_PROFILE } from '../utils/mutations'

// import Auth from '../utils/auth'

export default function Signup() {
    const [profileSignup, setProfileSignup] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
    });

    const [addProfile, { error }] = useMutation(ADD_PROFILE);

    const handleChange = (event) => {
        console.log(event)
    }


    return (
        <>
            {/* <div className="signup"> */}
            <form className="signup-form">
                <div className="form-group">
                    <input placeholder="First Name" type="text" name="first name" id="fname" required="true" onChange={handleChange} />
                    <input placeholder="Last Name" type="text" name="last name" id="lname" required="true" onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <input placeholder="Username" type="username" name="username" id="username" required="true" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <input placeholder="Email" type="email" name="email" id="email" required="true" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <input placeholder="Password" type="text" name="password" id="password" required="true" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <input placeholder="Confirm Password" type="text" name="password" id="confirm-password" required="true" onChange={handleChange} />
                </div>
            </form>
            <h3>Already have an account? <a href="/login">Log in</a></h3>
            {/* </div> */}
        </>
    )
}
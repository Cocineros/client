import './signup.css'

export default function Signup() {
    return (
        <>
            {/* <div className="signup"> */}
                <form className="signup-form">
                    <div className="form-group">
                        <input placeholder="First Name" type="text" id="fname" required="true" />
                        <input placeholder="Last Name" type="text" id="lname" required="true" />
                    </div>
                    <div className="form-group">
                        <input placeholder="Email" type="email" id="email" required="true" />
                    </div>
                    <div className="form-group">
                        <input placeholder="Password" type="text" id="password" required="true" />
                    </div>
                    <div className="form-group">
                        <input placeholder="Confirm Password" type="text" id="confirm-password" required="true" />
                    </div>
                </form>
                <h3>Already have an account? <a href="/login">Log in</a></h3>
            {/* </div> */}
        </>
    )
}
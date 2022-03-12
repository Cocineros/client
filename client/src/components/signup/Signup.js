import './signup.css'

export default function Signup() {
    return (
        <>
            <div className="signup">

                <h2>Create a new account</h2>

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
                <div>
                    <button type="sumbit">Submit</button>
                </div>
                <h3>Already have an account? <a href="/login">Log in</a></h3>
            </div>
        </>
    )
}
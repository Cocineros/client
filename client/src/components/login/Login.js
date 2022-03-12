import './login.css'

export default function Login() {
    return (
        <>
            {/* <div className="login"> */}

                {/* <h2>Log in to myCookbook</h2> */}

                <form className="login-form">
                    <div className="form-group">
                        <input placeholder="Email" type="email" id="email" required="true" />
                    </div>
                    <div className="form-group">
                        <input placeholder="Password" type="text" id="password" required="true" />
                    </div>
                </form>
                <div>
                    <button type="sumbit">Submit</button>
                </div>
                <h3>Don't have an account? <a href="/signup">Sign up</a></h3>
            {/* </div> */}
        </>
    )
}
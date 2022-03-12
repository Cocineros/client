import { NavLink } from 'react-router-dom'
import './landing.css'

export default function Landing() {
    return (
        <div className="landing-container">
            <h1>my cookbook</h1>
            <div className="buttons">
                <NavLink className="button" to="/signup">Signup</NavLink>
                <NavLink className="button" to="/login">Login</NavLink>
            </div>
        </div>
    )
}
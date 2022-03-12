import { NavLink } from 'react-router-dom';
import './nav.css'

export default function Nav(){
    return(
        <>
        <nav>
            <NavLink className="button" to ="">Home</NavLink>
            <NavLink className="button" to ="/signup">Signup</NavLink>
            <NavLink className="button"to ="/login">Login</NavLink>
        </nav>

        </>
    )
}
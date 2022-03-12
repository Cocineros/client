import { NavLink } from 'react-router-dom';
import './nav.css'

export default function Nav(){
    return(
        <>
        <nav>
            <NavLink className="button" to ="">Home</NavLink>
        </nav>
        </>
    )
}
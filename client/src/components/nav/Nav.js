import { NavLink } from 'react-router-dom';
import './nav.css'
import BumbuName from '../../assets/bumbu-name.png'

export default function Nav(){
    return(
        <>
        <nav>
            <div id="nav-logo-container">
                <img src={BumbuName} id="bumbu-name"/>
            </div>
            <NavLink className="button" to ="">Home</NavLink>
        </nav>
        </>
    )
}
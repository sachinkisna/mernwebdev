import '../App.css'
import { NavLink } from 'react-router-dom'

function Nav() {
    return (
        <nav>
            <h1>Radha</h1>
            <ul>
                <li>
                    <NavLink to="/" end>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
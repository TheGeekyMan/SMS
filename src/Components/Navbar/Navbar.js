import './Navbar.css';
import {NavLink} from 'react-router-dom'

const NavBar = () => {
    return(
        <ul className="navbar">
            <div className="left-list">
            <li className="list-item"><NavLink to="/viewAll">View</NavLink></li>
                <li className="list-item"><NavLink to="/add-record">Add</NavLink></li>
                <li className="list-item"><NavLink to="/update-record">Update</NavLink></li>
                <li className="list-item"><NavLink to="/delete-record">Delete</NavLink></li>
            </div>
            {/* <div className="right-list">
                <li className="list-item">Login</li>
                <li className="list-item">Register</li>
            </div> */}
        </ul>
    )
}

export default NavBar;
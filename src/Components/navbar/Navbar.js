import './Navbar.css';
import React from 'react';
import { useHistory } from "react-router-dom";

function Navbar() {
    const history = useHistory();

    function redirectToLink(link) {
        history.push(`${link}`);
    }

    return (
        <div className="navbar">
            <div className='navbar-item' onClick={ () => redirectToLink("/") }>
                Home
            </div>
            <div className='navbar-item' onClick={ () => redirectToLink("/about") }>
                About
            </div>
        </div>
    );
}

export default Navbar;
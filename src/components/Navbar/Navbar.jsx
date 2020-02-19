import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Navbar.module.css';

const Navbar = (props) => {
    return (
        <nav className={styles.navbar}>
            <Link to="/">
                <h1>Foodify</h1>
            </Link>
            <ul>
                <li>
                    <Link to="/restaurants">Restaurants</Link>
                </li>
                <li>Login</li>
                <li>Signup</li>
            </ul>
        </nav>

    );
}

export default Navbar;
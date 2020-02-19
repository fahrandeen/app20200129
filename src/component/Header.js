import React from 'react';
import { Link } from './router/Link';

const Header = () => {
    return (
        <div>
            {/* <Link to="/">All</Link>
            <Link to="/active">Active</Link>
            <Link to="/complete">Complete</Link> */}

            <nav className="navbar bg-light">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">All</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/active" className="nav-link">Active</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/complete" className="nav-link">Complete</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default Header
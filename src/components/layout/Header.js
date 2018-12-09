import React from 'react';
import {Link} from 'react-router-dom'
const Header = (props) =>{
    const {name} = props;

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-5 py-0">
            <div className="container">
                <a href="/" className="navbar-brand">{name}</a>
                <div>
                    <ul className="navbar-nav mr-lg-0">
                        <li className="nav-item">

                            <Link to="/" className="nav-link"><i className="fas fa-home mr-1"></i>
                                Home</Link>
                        </li>
                        <li className="nav-item">

                            <Link to="/contact/add" className="nav-link">
                                <i className="fas fa-plus mr-1"></i>Add Contact</Link>
                        </li>
                        <li className="nav-item">

                            <Link to="/about/" className="nav-link">
                                <i className="fas fa-question mr-2"></i>About</Link>
                        </li>
                    </ul>
                </div>
                </div>
        </nav>
    );
}

export default Header;

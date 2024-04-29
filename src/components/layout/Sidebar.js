import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../../styles/sidebar.css';

function Sidebar() {
    const [showNav, setShowNav] = useState(true);

    return (
        <div className={`body-area${showNav ? ' body-pd' : ''}`}>
            <header className={`header${showNav ? ' body-pd' : ''}`}>
                <div className="header_toggle">
                    <i
                        className={`bi ${showNav ? 'bi-x' : 'bi-list'}`}
                        onClick={() => setShowNav(!showNav)} />
                </div>
                <div className="header_img">
                    <img
                        src="https://scontent.fbom48-1.fna.fbcdn.net/v/t39.30808-1/394194183_2449350908590882_8705133710004172455_n.jpg?stp=dst-jpg_p200x200&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sgU9cGJcmL4Q7kNvgFg_KDb&_nc_ht=scontent.fbom48-1.fna&oh=00_AfCQ7nsdTYArV4AQBYsYOe6VxgIWhsOqgoJSbsnUqMMtOg&oe=6635B8A2"
                        alt="Clue Mediator" />
                </div>
            </header>
            <div className={`l-navbar${showNav ? ' show' : ''}`}>
                <nav className="nav">
                    <div>
                        <Link to="/" className="nav_logo">
                          <i className='bi bi-alexa nav_logo-icon' /> 
                            <span className="nav_logo-name">Contacts</span>
                        </Link>
                        <div className="nav_list">
                            <Link to="/contact" className="nav_link">
                                <i className='bi bi-envelope nav_icon' /><span className="nav_name">Contact</span>
                            </Link>
                            <Link to="/contact-list" className="nav_link">
                                <i className='bi bi-list nav_icon' /><span className="nav_name">Contact List</span>
                            </Link>
                        </div>
                    </div>
                    <Link to="/logout" className="nav_link">
                        <i className='bi bi-box-arrow-left nav_icon' /><span className="nav_name">Sign Out</span>
                    </Link>
                </nav>
            </div>
        </div>
    );
}

export default Sidebar;

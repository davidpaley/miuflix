import React from 'react';

import './_header.scss';

const Header = () => (
    <header className="header">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="header-content">
                        <span className="header-logo">Miuflix</span>
                        <nav className="header-nav">
                            <ul className="header-nav-list">
                                <li className="header-nav-list-item">
                                    <a href="#features">El Proyecto</a>
                                </li>
                                <li className="header-nav-list-item">
                                    <a href="#howto">Quienes somos</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </header>
);

export default Header;

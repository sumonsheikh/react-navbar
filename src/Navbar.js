import React, {useState, useEffect, useRef} from 'react';
import {FaBars, FaTwitter} from 'react-icons/fa';

const  Navbar = () => {
    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <h2><a href="#">Logo</a></h2>
                    <button className="nav-toggle">
                        <FaBars/>
                    </button>
                </div>
                <div className="link-container show-container">
                    <ul className="links">
                        <li>
                            <a href="#">home</a>
                        </li>
                        <li>
                            <a href="#">about</a>
                        </li>
                        <li>
                            <a href="#">contact</a>
                        </li>
                        <li>
                            <a href="#">product</a>
                        </li>
                       
                    </ul>
                </div>
                <ul className="social-icons">
                    <li>
                        <a href="https://www.twitter.com">
                            <FaTwitter/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.twitter.com">
                            <FaTwitter/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.twitter.com">
                            <FaTwitter/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.twitter.com">
                            <FaTwitter/>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
export default Navbar;
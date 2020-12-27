import React, {useState, useEffect, useRef} from 'react';
import {FaBars, FaTwitter} from 'react-icons/fa';

const  Navbar = () => {
    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <h2><a href="#">Logo</a></h2>
                    <button>
                        <FaBars/>
                    </button>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
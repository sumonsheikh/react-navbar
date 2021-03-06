import React, {useState, useEffect, useRef} from 'react';
import {FaBars, FaTwitter} from 'react-icons/fa';
import {links, icons} from './data';

const  Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <h2><a href="#">Logo</a></h2>
                    <button className="nav-toggle" onClick={()=>setShowLinks(!showLinks)}>
                        <FaBars/>
                    </button>
                </div>
                {showLinks &&  
                <div className="link-container show-container">
                    <ul className="links">
                       {links.map((link) =>{
                           const {id, url, text} = link;
                           return(
                               <li key={id}>
                                   <a href={url}>{text}</a>
                               </li>
                           )
                       })}
                    </ul>
                </div> }
               
                <ul className="social-icons">
                    {icons.map((singleIcon) =>{
                        const {id, url, icon} = singleIcon;
                        return (
                            <li key={id}>
                                <a href={url}>{icon}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    );
};
export default Navbar;
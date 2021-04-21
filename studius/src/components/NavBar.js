import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import * as FA from 'react-icons/fa';
import * as AI from 'react-icons/ai';
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import StudiusLogo from "../Assets/studius_logo_white_outline.png"

/* <img src={StudiusLogo} width="90px" height="90px" onClick={showSidebar}/> */

/* Left navigation bar */
function NavBar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
        <IconContext.Provider value={{ size:"3rem"}}>
            <div className="navbar">
                <div className="menu-bars-space"> 
                    <Link to="#" className="menu-bars">
                        <FA.FaBars onClick={showSidebar} />
                    </Link>
                </div>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items" onClick={showSidebar} >
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <AI.AiOutlineClose />
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path} >
                                    <div className="centeritem">{item.icon}</div>
                                    <div className="centeritem">{item.title}</div>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </IconContext.Provider>
        </>
    );
}

export default NavBar;
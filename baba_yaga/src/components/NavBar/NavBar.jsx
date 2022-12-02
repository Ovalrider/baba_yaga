import React from "react";
import {Link} from "react-router-dom"
import "../NavBar/NavBar.css"
import logosm from "../../assets/pics/menu-item-icon.png"
import logomain from "../../assets/pics/nav-logo.png"
import { useState } from "react";
function NavBar(){
    const [isBurger, setIsBurger] = useState(false);
    return(
        <div className="header-menu_container">
            <ul className="header-menu">
                <li className="menu-item">
                <div ><img src={logomain} alt="logo" className="logo-image"/></div>
                <Link className="menu-item_link" to="/">Спа салон Баби Яги</Link>
                </li>
                <li className="menu-item">
                    <div > <img src={logosm} alt="logo" className="item-icon"/></div>
                    <Link className="menu-item_link" to="/about">Про салон</Link>
                </li>
                <li className="menu-item">
                    <div ><img src={logosm} alt="logo" className="item-icon"/></div>
                    <Link className="menu-item_link" to="/services">Нашi послуги</Link>
                </li>
                <li className="menu-item">
                    <div ><img src={logosm} alt="logo" className="item-icon"/></div>
                    <Link className="menu-item_link" to="/reviews">Відгуки</Link>
                </li>
                <li className="menu-item">
                    <div ><img src={logosm} alt="logo" className="item-icon"/></div>
                    <Link className="menu-item_link" to="/contacts">Контакти</Link>
                </li>
            </ul>
        </div>
    )
}
export default NavBar;
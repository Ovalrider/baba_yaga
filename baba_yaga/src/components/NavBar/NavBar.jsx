import React from "react";
import {Link} from "react-router-dom"
import "../NavBar/NavBar.css"

function NavBar(){
    return(
        <div className="header-menu_container">
            <div className="logo-block">
                <div className="logo-image"></div>
                <Link className="menu-item_link" to="/">Спа салон Баби Яги</Link>
            </div>
            <ul className="header-menu">
                <li className="menu-item">
                    <div className="item-icon-1"></div>
                    <Link className="menu-item_link" to="/about">Про салон</Link>
                </li>
                <li className="menu-item">
                    <div className="item-icon-2"></div>
                    <Link className="menu-item_link" to="/services">Наші послуги</Link>
                </li>
                <li className="menu-item">
                    <div className="item-icon-3"></div>
                    <Link className="menu-item_link" to="/reviews">Відгуки</Link>
                </li>
                <li className="menu-item">
                    <div className="item-icon-4"></div>
                    <Link className="menu-item_link" to="/contacts">Контакти</Link>
                </li>
            </ul>
        </div>
    )
}
export default NavBar;
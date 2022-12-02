import React from "react";
import {Link} from "react-router-dom"
import Logo from "../assets/pics/logo.png"
import MenuItem from "../assets/pics/menu-item-icon.png"
import "../assets/css/Navbar.css"
//доробити іконки та підсвічення посилання
function NavBar(){
    return(
        <div className="header-menu_container">
            <div className="logo-block">
                <img className="logo-imgage" src={Logo} alt="" />
                <Link className="menu-item_link" to="/">Спа салон Баби Яги</Link>
            </div>
            <ul className="header-menu">
                <li className="menu-item"><Link className="menu-item_link" to="/about">Про салон</Link></li>
                <li className="menu-item"><Link className="menu-item_link" to="/services">Наші послуги</Link></li>
                <li className="menu-item"><Link className="menu-item_link" to="/reviews">Відгуки</Link></li>
                <li className="menu-item"><Link className="menu-item_link" to="/contacts">Контакти</Link></li>
            </ul>
        </div>
    )
}
export default NavBar;

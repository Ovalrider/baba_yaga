import React from "react";
import {Link} from "react-router-dom"
//доробити іконки та підсвічення посилання
function NavBar(){
    return(
        <div className="header-menu_container">
            <ul className="header-menu">
                <li className="menu-item"><Link className="menu-item_link" to="/">Спа салон Баби Яги</Link></li> 
                <li className="menu-item"><Link className="menu-item_link" to="/about">Про салон</Link></li>
                <li className="menu-item"><Link className="menu-item_link" to="/services">Наші послуги</Link></li>
                <li className="menu-item"><Link className="menu-item_link" to="/reviews">Відгуки</Link></li>
                <li className="menu-item"><Link className="menu-item_link" to="/contacts">Контакти</Link></li>
            </ul>
        </div>
    )
}
export default NavBar;
 import React from "react";
import {Link} from "react-router-dom"
//доробити іконки та підсвічення посилання
function NavBar(){
    return(
        <ul>
            <li><Link to="/">Спа салон Баби Яги</Link></li> 
            <li><Link to="/about">Про салон</Link></li>
            <li><Link to="/services">Наші послуги</Link></li>
            <li><Link to="/reviews">Відгуки</Link></li>
            <li><Link to="/contacts">Контакти</Link></li>
        </ul>
    )
}
export default NavBar;
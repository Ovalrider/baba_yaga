import React from "react";
import "./Contacts.css"
import NavBar from "../../components/NavBar/NavBar";
//add icons at the bottom
function Contacts(){
    return(
        <div className="contacts-body">
            <NavBar/>
            <div className="contacts-text">
                <h1 className="contacts-cpt">БУДЕМО РАДI БАЧИтИ ВАС</h1>
                <h5 className="p-c">ТЕЛЕФОН</h5>
                <h5 className="p-n">(123) 456-7890</h5>
                <h5 className="m-c">ПОШТА</h5>
                <h5 className="m-t">jsalon@gmail.com</h5>

                <p className="soc-net">соц. мережi</p>
                <div className="fcb-icon"></div>
                <div className="inst-icon"></div>
                <div className="twt-icon"></div>
            </div>
        </div>
    )
}
export default Contacts;
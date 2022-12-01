import React from "react";
import NavBar from "../../components/NavBar/NavBar";
//add icons at the bottom
function Contacts(){
    return(
        <div className="contacts_body">
            <NavBar/>
            <div className="big_yellow_text">
            <h1>БУДЕМО РАДI БАЧИтИ ВАС</h1>
            <h5>ТЕЛЕФОН</h5>
            <h5>(123) 456-7890</h5>
            <h5>ПОШТА</h5>
            <h5>jsalon@gmail.com</h5>
            <p>соц. мережi</p>
            </div>
        </div>
    )
}
export default Contacts;
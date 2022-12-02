import React from "react";
import "./Contacts.css"
import NavBar from "../../components/NavBar/NavBar";
//add icons at the bottom
function Contacts(){
    return(
        <div className="contacts-body">
            <NavBar/>
            <div className="contacts-text">
                <div className="contacts-main">
                    <h1 className="contacts-main_title">БУДЕМО РАДI БАЧИтИ ВАС</h1>
                    <div className="contcats-numbers">
                        <div className="contcats-numbers_phone">
                            <h5 className="contcats-numbers_title">ТЕЛЕФОН</h5>
                            <h5 className="contcats-numbers_data">(123) 456-7890</h5>
                        </div>
                        <div className="contacts-numbers_email">
                            <h5 className="contcats-numbers_title">ПОШТА</h5>
                            <h5 className="contcats-numbers_data">jsalon@gmail.com</h5>
                        </div>
                    </div>
                </div>
                <div className="contacts-social">
                    <p className="contacts-social_title">соц. мережi</p>
                    <div className="contacts-social_links">
                        <div className="contacts-social_icon_fb"></div>
                        <div className="contacts-social_icon_inst"></div>
                        <div className="contacts-social_icon_twt"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contacts;
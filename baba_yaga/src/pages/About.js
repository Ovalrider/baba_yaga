import React from "react";
import babayaga from "../assets/pics/home_left_baba.jpg"

function About(){
    return(
        <div className="about_body">
            <div className="big_yellow_text">
            <h1>Першокласнi послуги в токсичному i тривожному середовищi</h1>
            <h5>МIСIЯ НАШОГО САЛОНУ ЗРОБИТИ НАШИХ КЛIEНТIВ ЩАСЛИВИМИ, А ТАКОЖ ПIДКРЕСЛИТИ IНДИВIДУАЛЬНIСТЬ</h5>
            <img src={babayaga} className="baba_yaga" />
            </div>
        </div>
    )
}
export default About;
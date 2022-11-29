import React from "react";
import babayaga from "../assets/pics/babajaga-home.png"

function About(){
    return(
        <div className="about-body">
            <div className="big_yellow_text">
                <h1>Першокласнi послуги в токсичному i тривожному середовищi</h1>
                <h5>МIСIЯ НАШОГО САЛОНУ ЗРОБИТИ НАШИХ КЛIEНТIВ ЩАСЛИВИМИ, А ТАКОЖ ПIДКРЕСЛИТИ IНДИВIДУАЛЬНIСТЬ</h5>
            </div>
            <img src={babayaga} className="baba_yaga" />

        </div>
    )
}
export default About;
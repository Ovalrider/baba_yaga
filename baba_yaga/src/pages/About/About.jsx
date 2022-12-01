import React from "react";
import babayaga from "../../assets/pics/babajaga-home.png"
import "./About.css"
import NavBar from "../../components/NavBar/NavBar";

function About(){
    return(
        <div className="about-body">
            <NavBar/>
            <div className="about-div">
                <h1 className="about-text">Першокласнi послуги в токсичному i тривожному середовищi</h1>
                <h5 className="about-text">МIСIЯ НАШОГО САЛОНУ ЗРОБИТИ НАШИХ КЛIEНТIВ ЩАСЛИВИМИ, А ТАКОЖ ПIДКРЕСЛИТИ IНДИВIДУАЛЬНIСТЬ</h5>
            </div>
            <img src={babayaga} className="baba" alt="baba yaga"/>

        </div>
    )
}
export default About;
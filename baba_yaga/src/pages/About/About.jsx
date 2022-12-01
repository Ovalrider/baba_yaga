import React from "react";
import babayaga from "../../assets/pics/babajaga-home.png"
import "./About.css"
import NavBar from "../../components/NavBar/NavBar";

function About(){
    return(
        <div className="about-body">
            <NavBar/>
            <div className="about-div">
                <img src={babayaga} className="baba-a" alt="baba yaga"/>
                <div className="text-div">
                    <p className="about-text big">Першокласнi послуги в токсичному i тривожному середовищi</p>
                    <p className="about-text smaller">МIСIЯ НАШОГО САЛОНУ ЗРОБИТИ НАШИХ КЛIEНТIВ ЩАСЛИВИМИ, А ТАКОЖ ПIДКРЕСЛИТИ IНДИВIДУАЛЬНIСТЬ</p>
                </div>
                
            </div>
            

        </div>
    )
}
export default About;
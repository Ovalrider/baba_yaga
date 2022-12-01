import React from "react";
import p1 from "../assets/pics/services_1.jpg"
import p2 from "../assets/pics/services_2.jpg"
import p3 from "../assets/pics/services_3.jpg"
import p4 from "../assets/pics/services_4.jpg"
import p5 from "../assets/pics/services_5.jpg"
import p6 from "../assets/pics/services_6.jpg"
import NavBar from "../components/NavBar/NavBar";
//задній фон заблюрити та зробити горизонтальну лінію після Наші послуги
function Services(){
    return(
        <div className="Services_body">
            <NavBar/>
            <div className="big_yellow_text">
                <h1>НАШI ПОСЛУГИ</h1>
            </div>
            <div className="flex_container">
                <div className="flex_card">
                    <img src={p1} alt="BABA YAGA" />
                    <p className="yellow_text">макіяж</p>
                </div>
                <div className="flex_card">
                    <img src={p2} alt="BEAR LEGS" />
                    <p className="yellow_text">педікюр та спа</p>
                </div>
                <div className="flex_card">
                    <img src={p3} alt="NAILS" />
                    <p className="yellow_text">покриття гелем</p>
                </div>
                <div className="flex_card">
                    <img src={p4} alt="GOLLUM" />
                    <p className="yellow_text">догляд за волоссям</p>
                </div>
                <div className="flex_card">
                    <img src={p5} alt="ZVONOK LADY" />
                    <p className="yellow_text">зачіски</p>
                </div>
                <div className="flex_card">
                    <img src={p6} alt="MAKE-UP" />
                    <p className="yellow_text">замовити косметику</p>
                </div>
            </div>
        </div>
    )
}
export default Services;
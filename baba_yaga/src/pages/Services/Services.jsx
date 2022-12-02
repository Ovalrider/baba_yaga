import React from "react";
import p1 from "../../assets/pics/services_1.jpg"
import p2 from "../../assets/pics/services_2.jpg"
import p3 from "../../assets/pics/services_3.jpg"
import p5 from "../../assets/pics/services_5.png"
import p4 from "../../assets/pics/services_4.png"
import p6 from "../../assets/pics/services_6.png"
import NavBar from "../../components/NavBar/NavBar";
import "./Services.css"

const cards = [
    {
        image: p1,
        price: 75,
        name: "макіяж",
    },
    {
        image: p2,
        price: 35,
        name: "педікюр та спа",
    },
    {
        image: p3,
        price: 25,
        name: "покриття гелем",
    },
    {
        image: p4,
        price: 130,
        name: "догляд за волоссям",
    },
    {
        image: p5,
        price: 125,
        name: "зачіски",
    },
    {
        image: p6,
        price: 40,
        name: "замовити косметику",
    },
]
//задній фон заблюрити та зробити горизонтальну лінію після Наші послуги
function Services(){
    return(
        <div className="services_body">
            <NavBar/>
            <div className="content-container">
                <div className="services-title">
                    <h1>НАШI ПОСЛУГИ</h1>
                </div>
                <hr color="#D7A43B" style={{width: "90%", marginTop: "45px", height: "1px"}}/>
                <div className="services-flex_container">
                    {cards.map((card, index)=>(
                    <div key={index}>
                        <div className="flex_card" style={{backgroundImage: `url(${card.image})`}}>
                            {/* <img src={p1} alt="BABA YAGA" /> */}
                            <p className="item-price">від {card.price}$</p>
                        </div>
                        <p className="card-name">{card.name}</p>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Services;
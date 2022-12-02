import React from "react";
import pic1 from "../../assets/pics/leshui.png"
import pic2 from "../../assets/pics/mavka.png"
import pic3 from "../../assets/pics/veles.png"
import NavBar from "../../components/NavBar/NavBar";
import "./Review.css"
//додати горизантальні лінії між дівами flex container
function Review(){
    return(
        <div className="review-body">
            <NavBar/>
            <div className="flex-container">
                <div className="add">
                    <h1 className="review-caption">ВIДГУКИ НАШИХ КЛIЕНТIВ</h1>
                    <div className="leshui">
                        <img src={pic1} alt="LISOVYK" className="card-image"/>
                        <div className="inner-flex">
                            <p className="txt">"Огидно, жахливо I небезпечно. I це ще не всI найкращI якостI салону Баба-ЯгИ!"</p>
                            <p className="cpt">ЛIСОВИК</p>
                        </div>
                    </div>
                </div>

                <div className="line"></div>

                <div className="mavka">
                    <img src={pic2} alt="MAVKA" className="card-image"/>
                    <div className="inner-flex-m">
                        <p className="txt">"Кожного разу, коли менi сумно, я купую тут новi косметичнi засоби."</p>
                        <p className="cpt">мавка лiсова</p>
                    </div>
                </div>

                <div className="line"></div>

                <div className="veles">
                    <img src={pic3} alt="BOG VELES" className="card-image"/>
                    <div className="inner-flex-m">
                        <p className="txt">"Хочу висловити щиру подяку всьому персоналу салону. Зачiска, яку я там зробив, одна з найкращих у моeму життi."</p>
                        <p className="cpt">бог велес</p>
                    </div>
                </div>
            
            </div>
            
        </div>
    )
}
export default Review;
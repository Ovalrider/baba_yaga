import React from "react";
import pic1 from "../assets/pics/review_1.jpg"
import pic2 from "../assets/pics/review_2.jpg"
import pic3 from "../assets/pics/review_3.jpg"
//додати горизантальні лінії між дівами flex container
function Review(){
    return(
        <div className="review_body">
            <div className="big_lightbrown_text">
            <h1>Підкресліть свою індивідуальність та чарівність</h1>
            </div>
            <div className="flex_container">
                <div className="flex_card">
                    <img src={pic1} alt="LISOVYK" />
                    <p className="lightbrown_text">"Огидно, жахливо I небезпечно. I це ще не всI найкращI якостI салону Баба-ЯгИ!"</p>
                    <p className="lightbrown_text">ЛIСОВИК</p>
                </div>
                <div className="flex_card">
                    <img src={pic2} alt="MAVKA" />
                    <p className="lightbrown_text">"Кожного разу, коли менi сумно, я купую тут новi косметичнi засоби."</p>
                    <p className="lightbrown_text">мавка лiсова</p>
                </div>
                <div className="flex_card">
                    <img src={pic3} alt="BOG VELES" />
                    <p className="lightbrown_text">"Хочу висловити щиру подяку всьому персоналу салону. Зачiска, яку я там зробив, одна з найкращих у моeму життi."</p>
                    <p className="lightbrown_text">бог велес</p>
                </div>
            
            </div>
            
        </div>
    )
}
export default Review;
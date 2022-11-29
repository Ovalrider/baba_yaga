import React from "react";
import babayaga from "../assets/pics/home_left_baba.png"
import NavBar from "../components/NavBar";


function Home(){
    return(
        <div className="home_body">
            <NavBar/>
            <div className="big_yellow_text">
                <h1>Підкресліть свою індивідуальність та чарівність</h1>
                <img src={babayaga} className="baba_yaga"/>
            </div>
        </div>
    )
}
export default Home;
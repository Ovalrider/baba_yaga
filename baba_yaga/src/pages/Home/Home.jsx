import React from "react";
import './Home.css'
import babayaga from "../../assets/pics/babajaga-home.png"
import NavBar from "../../components/NavBar/NavBar";

function Home(){
    return(
        <div className="home-body">
            <NavBar />
            
            <div className="home-div">
                <img src={babayaga} className="baba" alt="baba yaga"/>
                <div className="text-main">
                 <p class="main-caption big-m">Підкресліть свою індивідуальність та чарівність</p>
                </div>
            </div>
        </div>
    )
}
export default Home;
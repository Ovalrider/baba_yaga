import React from "react";
import './Home.css'
import babayaga from "../../assets/pics/babajaga-home.png"
import NavBar from "../../components/NavBar";

function Home(){
    return(
        <div className="home-body">
            <NavBar />
            <h1 class="main-caption">Підкресліть свою індивідуальність та чарівність</h1>
            <img src={babayaga} className="baba"/>
            <div class="main-rectangle"></div>

        </div>
    )
}
export default Home;
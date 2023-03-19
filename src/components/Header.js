import React from "react";
import Myphoto from "../components/images/dp.JPG";
import "./Header.css";

function Header(){
    return(
        <div className="header">
            <img className="header-img" src={Myphoto} alt="myphoto" />
            <h3 className="header-name">Ihjazul Aslam AT</h3>
            <h4 className="header-skill">Frontend Developer</h4>
        </div>
    )
}
export default Header;
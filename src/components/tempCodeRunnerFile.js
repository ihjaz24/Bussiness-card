import React from "react";
import Myphoto from "../components/images/dp.JPG";
import "./Header.css"

function Header(){
    return(
        <div className="header">
            <img className="header-img" src={Myphoto} alt="myphoto" />
            <h3 className="header-name">IHJAZUL ASLAM</h3>
        
        </div>
    )
}
export default Header;
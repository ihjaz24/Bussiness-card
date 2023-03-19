import React from "react";
import gitlogo from "./images/github.svg";
import fblogo from "./images/facebook.svg";
import twitterlogo from "./images/twitter.svg";
import instalogo from "./images/instagram.svg";
import "./Footer.css"
function Footer(){
    return(
        <div className="footer">
            <a href="https://github.com/ihjaz24">
                <img className="github" src={gitlogo} alt="gitHub" />
            </a>
            <a href="https://www.instagram.com/ihjaz__/">
                <img className="instagram" src={instalogo} alt="instagram" />
            </a>
            <a href="https://www.facebook.com/azi.azlam/">
                <img className="facebook" src={fblogo} alt="facebook" />
            </a>
            <a href="https://twitter.com/Ihjaz14">
                <img className="twitter" src={twitterlogo} alt="twitter" />
            </a>

        </div>
    )
}
export default Footer;
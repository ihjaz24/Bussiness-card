import React from "react";
import "./Main.css"
import linkedinlogo from "./images/linkedin.svg"
import maillogo from "./images/Mail.svg"
function Main(){
    return(
        <div className="Main">
            <nav className="main-nav">
                <a className="linkedin" href="https://www.linkedin.com/in/ihjazul-aslam-at-a2a676215/">
                    <img  src={linkedinlogo} alt="linkedin"/> LinkedIn
                </a>
                <a className="mail" href="ihjazmohd19@gmail.com">
                    <img src={maillogo} alt="mail"/> E-Mail
                </a>
            </nav>
            <div class="about">
                <h2>About</h2> 
                <p>I am a front-end developer with a focus on React, my expertise lies in creating dynamic and interactive user interfaces for web applications. I have a deep understanding of React's component-based architecture and can develop reusable UI components that can be easily integrated into larger applications.</p>
            </div>
        </div>
    )
}

export default Main;
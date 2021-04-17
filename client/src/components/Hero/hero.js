import React from "react";
import "./style.css";


function Hero({ children }) {
    return (
        <div className="jumbotron">
            {children}
        </div>
    )
}

export default Hero;



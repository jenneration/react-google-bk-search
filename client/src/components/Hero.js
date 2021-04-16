import React from "react";


function Hero({ children }) {
    return (
        <div style={{ background: "danger", height: 200, paddingTop: 120, textAlign: "center" }}
            className="jumbotron">
            {children}
        </div>
    )
}



export default Hero;
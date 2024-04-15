import React from "react"
import reactLogo from "../images/logo192.png"

export default function Header(props) {
    return (
        <>
        <nav className={ (props.lightMode ? "light" : "dark") + " nav" }>
            <img  src={reactLogo} alt="React logo" className="nav-logo"/>
            <h3 className="nav-facts">ReactFacts</h3>
            <div className="slider-container">
                <span className={(props.lightMode ? "" : "dark-light-span")}>Light</span>
                <input type="checkbox" className="slider" onClick={props.handleSliderClick}/>
                <span className={(props.lightMode ? "light-dark-span" : "")}>Dark</span>
            </div>
            
        </nav>
        <hr/>
        </>
    )
}
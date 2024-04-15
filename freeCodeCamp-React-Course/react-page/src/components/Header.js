import React from "react"
import reactLogo from "../images/logo192.png"

export default function Header() {
    return (
        <nav className="nav">
            <img  src={reactLogo} alt="React logo" className="nav-logo"/>
            <h3 className="nav-facts">ReactFacts</h3>
            <h4 className="nav-course">React Course - Project 1</h4>
        </nav>
    )
}
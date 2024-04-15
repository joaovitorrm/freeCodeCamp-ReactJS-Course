import React from "react"

import backgroundLogo from "../images/logo192.png"

export default function MainContent() {
    return (
        <div className="main-content">            
            <h1 className="main-title">Fun facts about React</h1>
            <ul className="main-list">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
            <img src={backgroundLogo} alt="backgroundLogo" className="main-logo"/>
        </div>
    )
}
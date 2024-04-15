import Header from "./components/Header"
import MainContent from "./components/MainContent"

import React from "react";

export default function App() {

    const [lightMode, setLightMode] = React.useState(true);

    function handleSliderClick() {
        setLightMode(prevMode => !prevMode);
    }

    return (
        <div className="container">
            <Header handleSliderClick={handleSliderClick} lightMode={lightMode} />
            <MainContent lightMode={lightMode}/>
        </div>
    )
}
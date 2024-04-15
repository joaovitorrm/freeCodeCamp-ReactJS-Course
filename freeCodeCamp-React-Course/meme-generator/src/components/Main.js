import React from "react"

import memesData from "../memesData";

export default function Main() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        imgUrl: "https://i.imgflip.com/23ls.jpg"
    })

    function handleChange(e) {
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [e.target.name]: e.target.value
            }
        })
    }

    function handleClick() {
        const randomImageValue = Math.floor(Math.random() * memesData.data.memes.length);
        setMeme((prevMeme) => {
            return {
                ...prevMeme,
                imgUrl: memesData.data.memes[randomImageValue].url
            }
        })
    }

    return (
        <main className="main-container">
            
            <div className="form-container">
                <input type="text" placeholder="Top meme text" className="text-meme" onChange={handleChange} name="topText"/>
                <input type="text" placeholder="Bottom meme text" className="text-meme" onChange={handleChange} name="bottomText"/>
                <input type="button" value="Get a new MEME image" className="button-meme" onClick={handleClick}/>
            </div>

            <div className="meme-result">
                <h2 className="top-text text">{meme.topText}</h2>
                <h2 className="bottom-text text">{meme.bottomText}</h2>
                <img alt="meme" className="meme-image" src={meme.imgUrl}></img>
            </div>
        
        </main>
    )
}
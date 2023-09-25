import React from "react";
import { Link } from 'react-router-dom'

function Home(){
    function teste(){
        window.location.href = "/sobre"
    }

    return (
        <div>
            <h1>Página Home</h1>
            <a href="/sobre">Sobre</a>
            <Link to={'/sobre'}>Sobre</Link>
            <button onClick={teste}>Sobre</button>
        </div>
    )
}

export default Home;
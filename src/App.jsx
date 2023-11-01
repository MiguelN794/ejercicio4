import React from "react";
import './App.css';
import {Encuestas} from "./components/Encuestas";

export const App = () => {

    const encuestas = [
        { id: 1, pregunta: "¿Cuál es tu comida favorita?", opciones: ["Pizza", "Hamburguesa", "Pasta"] },
        { id: 2, pregunta: "¿Cuál es tu bebida favorita?", opciones: ["Agua", "Cerveza", "Vino"] },
    ]



    return (
    <div className="App">
        <h1>Aplicacion de encuestas</h1>
        <Encuestas encuestas={encuestas} />
    </div>
    )
}


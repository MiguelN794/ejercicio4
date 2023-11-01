import React from "react";

export function Encuestas({ encuestas }) {
    return (
        <>
        <h2>Encuestas disponibles</h2>
        <ul>
            {encuestas.map((encuesta) => (
                <li key={encuesta.id}>
                    {encuesta.pregunta}
                    <ul>
                        {encuesta.opciones.map((opcion) => (
                            <li key={`${encuesta.id}-${opcion}`}>{opcion}</li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
        </>
    )
}

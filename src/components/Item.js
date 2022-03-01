import React from 'react'

const Personaje = ({personaje}) => {
return (
    <>
    <div>
        <div>Nombre: {personaje.name}</div>
        <div>Género: {personaje.gender}</div>
    </div>
    <img src={personaje.image}></img>
    </>
)
}

export default Personaje
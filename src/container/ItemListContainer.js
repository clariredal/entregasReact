import { useEffect, useState } from "react"
import Personaje from "../components/Item"

const styleDiv ={
  color: "black",
  fontSize:"20px",
  fontStyle:"bold"
}

const ItemListContainer = () => {

    const [personajes, setPersonajes] = useState([])
    useEffect(() => {
        getPersonajes()
    }, [])

    const getPersonajes = () => {
        const URL = 'https://rickandmortyapi.com/api/character'

        fetch(URL)
        .then(res => res.json())
        .then(res => {
            console.log(res);
            setPersonajes(res.results)
        })
    }

  return (
    <>
    <div style={styleDiv}>Personajes de Rick and Morty</div>
    <div className="personaje-container">
      {personajes.map(p => <Personaje personaje={p} key={p.id}></Personaje>)}
    </div>
    </>
  )
}

export default ItemListContainer
import React, {useEffect, useState } from 'react'
import { todosPersonajes } from '../funciones/functions';
import personaje from './personaje';
import style from './inicios.css'

const Inicio = () => {
  const [personajes, setPersonajes] = useState(null)




  useEffect(()=>{
    todosPersonajes(setPersonajes);
  },[])

  
  return (
    <>
    <main>


      <h1>Personajes</h1>
      <hr></hr>

      <div className='containerCards' style={style}>
        {personajes !== null ? (personajes.map(personaje =>(
          <div className='cardCharacter' key={personaje.id} style={style}>
            <a href={`/personaje/${personaje.id}`}>{personaje.name}</a>
            <img src={personaje.image} alt={personaje.name} />
              <div className='descriptionCard' style={style}>
                <h4>{personaje.status}</h4>
                <p>{personaje.species}</p>
              </div>
          </div>
          ))) : ('No hay personajes')}
      </div>


      </main>
    </>
  )
}

export default Inicio;

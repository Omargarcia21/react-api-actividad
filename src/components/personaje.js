import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { unicoPersonaje} from '../funciones/functions'
import style from './personaje.css';

const Personaje = () => {
  const [personaje, setPersonaje] = useState(null);

  const parms = useParams();
  useEffect(() => {
    unicoPersonaje(parms.id, setPersonaje)
  }, [])

  return (
    <>
    {personaje !== null ? (
      <div className='container' style={style}>
      <div className='containerInfo' style={style}>
      <p className='nombrePersonaje'>Nombre: {personaje.name}</p>
      <img src={personaje.image} alt='' />
        <h2 className='idPersonaje'>Personaje con el id: {parms.id}</h2>
        <h4 className='estadoPersonaje'>Estado de Personaje: {personaje.status}</h4>
        <p className='especiePersonaje'>Especie: {personaje.species}</p>
        </div>
        </div>
        ): ('Cargando personaje')}
    </>
  )
}
export default Personaje

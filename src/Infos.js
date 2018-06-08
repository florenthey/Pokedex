import React from 'react'
import './Infos.css'


const Infos = ({pokemon})=> {
    const { id, name, sprite, type, height, weight } = pokemon;

    return(
        <div>
          <h1>POKEMON</h1>
            <img className='pichu' src={ sprite }/>
            <h4>Nom: { name } </h4>
            <h4>ID: { id } </h4>
            <p>Type: { type } </p>
            <p>Poids: { weight } kg </p>
            <p>Taille: { height } m </p>
            
        </div>
    )
}


export default Infos;
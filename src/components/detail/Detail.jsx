import React from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";

const Deatil = () => {
  const params = useParams()
  const [character, setCharacter] = React.useState({})

  React.useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${params?.id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });

    return setCharacter({});

  }, [params?.id])



  return (
    // El Optional chaining, debe estar, ya que el renderizado se efectua casi inmediato inclusive antes del llamado de la API, y el estado en la linea 7, esta vacio.
    <div>
      <h2>{character?.name}</h2>
      <p>{character?.status}</p>
      <p>{character?.species}</p>
      <p>{character?.gender}</p>
      <p>{character?.origin?.name}</p>
      <img src={character.image} alt={character.name} />
    </div>


  )
}

export default Deatil
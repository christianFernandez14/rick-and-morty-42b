import  styleApp from './App.css';
import Nav from './components/nav/Nav';
import Cards from './components/cards/Cards';
import { useState } from 'react';
import axios from 'axios'

function App() {
   const [characters, setCharacters] = useState([])
   
   const onSearch = id => {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
         .then(({ data }) => {
            if (data.name) {
               
               // Comprobamos si el personaje ya existe en la lista
               const characterExists = characters.some(character => character.id === data.id)
               !characterExists 
               ? // Si no existe lo agreagamos
                  setCharacters((oldChars) => [...oldChars, data])
               : window.alert('Este persona je ya se encuentra en pantalla')

            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         });
   }

   const onClose = id => {
      const charactersFiltered = characters.filter(character => character.id !== Number(id))
      setCharacters(charactersFiltered)
   }

   return (
      <div className={styleApp.layout}>
         <Nav
            onSearch={onSearch}
         />
         <Cards
            characters={characters}
            onClose={onClose}
         />
      </div>
   );
}

export default App;

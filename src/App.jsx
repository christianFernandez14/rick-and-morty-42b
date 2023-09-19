import  styleApp from './App.css';
import Nav from './components/nav/Nav';
import Cards from './components/cards/Cards';

// Importando el hook useState.
import { useState } from 'react';
import axios from 'axios'

function App() {
   // Hooks
   const [characters, setCharacters] = useState([])


   // Funciones y variables

   // Revisar esta promesa, con la del instructor
   const onSearch = id => {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
         .then(({ data }) => {
            // console.log(data)    
            if (data.name) {
               //setCharacters([...characters, data]) 
               setCharacters((oldChars) => [...oldChars, data]);
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

import styleApp from './App.css';
import Nav from './components/nav/Nav';
import Cards from './components/cards/Cards';
import Detail from './components/detail/Detail';
import About from './components/about/About';
import axios from 'axios'
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";

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
                  : window.alert('Este personaje ya se encuentra en pantalla')

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
         <Routes>
            <Route path="/home" element={<Cards
               characters={characters}
               onClose={onClose}
            />} />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail />} />
         </Routes>
      </div>
   );
}

export default App;

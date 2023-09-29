/* Styles*/
import styleApp from './App.css';

/* Components to render */
import Nav from './components/nav/Nav';
import Form from './components/form/Form';
import About from './components/about/About';
import Cards from './components/cards/Cards';
import Detail from './components/detail/Detail';
import Favorites from './components/fovorites/Favorites';

/* Hooks */
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

/* Dependences */
import axios from 'axios'


// Simulacion de data de una base dato (credenciales):
const USER_EMAIL = 'christian123@correo.com'
const USER_PASSWORD = '123asd'


const  App = () => {
   const [characters, setCharacters] = useState([])
   const [access, setAccess] = useState(false)

   // Obtengo la ubicacion actual, viendo que es un objeto solo me traigo pathname
   const { pathname } = useLocation()
   // Verificon lo que me trae location
   // console.log(location)

   // navigate me devuelve una funcion
   const navigate = useNavigate()

   const onSearch = id => {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
         .then(({ data }) => {
            if (data.name) {
               const characterExists = characters.some(character => character.id === data.id)
               !characterExists
                  ?
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

   const login = (userData) =>{
      if (userData.password === USER_PASSWORD && userData.email=== USER_EMAIL){
         setAccess(true)
         navigate('/home')
      }
   }


   useEffect(() => {
      !access && navigate('/');
   }, [access]);

// Para condicional de renderizado del Nav
const isNavVisible = pathname !== '/'

   return (
      <div className={styleApp.layout}>

         { // Condicionamos la barra Nav
            isNavVisible && (<Nav
               onSearch={onSearch}
               setAccess={setAccess}
            />)
         }
         <Routes>
            <Route path="/home" element={<Cards
               characters={characters}
               onClose={onClose} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path='/' element={<Form login= {login}/>}></Route>
            <Route path='/favorites' element={<Favorites />}></Route>            
         </Routes>
      </div>
   );
}

export default App;

import styleCards from '../nav/Nav.module.css';
// Importa y crea un estado
import { useState } from "react";

export default function SearchBar({ onSearch }) {
   // Hooks
   const [id, setId] = useState('')

   // Funciones y variables
   const handleChange = (event) => {
      setId(event.target.value)

   }
   return (
      <div className={styleCards.nav__searchButton}>
         <input
            type="text"
            placeholder="Search by Id..."
            onChange={handleChange}
            value={id}
         />
         <button
            onClick={() => { onSearch(id); setId('') }}
         >
            Agregar
         </button>
      </div>
   );
}


/* 
Comentarios:

1.- Linea 20: Prueba quitando el callBack y deja la ejecicion de onSearch con su parametro id L19;  con la callBack te aseguras un paso previo 


*/
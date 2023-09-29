import styleCard from './Card.module.css'
import { Link, useLocation } from "react-router-dom";
import { addFav, removeFav } from '../../redux/actions';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Card = ({ id, name, species, gender, image, onClose }) => {
   // Estado local
   const [isFav, setIsFav] = useState(false)

   // Me genera una funcion para que pueda despachar la accion.
   const dispatch = useDispatch();

   // Accedo al estod global desde este componente
   const myFavorites = useSelector((state) => state.myFavorites)

   // Para el condicional del boton en Favorito:
   const { pathname } = useLocation()

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false)
         dispatch(removeFav(id))
      } else {
         setIsFav(true)
         dispatch(addFav({ id, name, species, gender, image }))
      }
   }


   useEffect(() => {
      // Es bueno preguntar si hay algo en myFavorites, con el optional chaning
      myFavorites?.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true)
         }
      })
   }, [myFavorites])

   return (
      <div >
         <figure className={styleCard.cards__card}>
            <button onClick={handleFavorite}>
               {isFav ? '❤️' : '🤍'}
            </button>

            {
               // Condiciono el boton de eliminar card, cuando se encuentre en /favorites
               pathname !== '/favorites'
               ? <button className={styleCard.card__button} onClick={() => onClose(id)}>X</button>
               : ''
            }
            
            <img
               className={styleCard.card__image}
               src={image}
               alt={name}
            />
            <Link to={`/detail/${id}`}>
               <h2 className={styleCard.card__name}>{name}</h2>
            </Link>
            <div className={styleCard.card__description}>
               <h3 className={styleCard.card__text}>{species}</h3>
               <h3 className={styleCard.card__text}>{gender}</h3>
            </div>
         </figure>
      </div>
   );
}

export default Card
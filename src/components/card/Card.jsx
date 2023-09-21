import styleCard from './Card.module.css'
import { Link } from "react-router-dom";

export default function Card({ id, name, status, species, gender, origin, image, onClose }) {
   // console.log(props);
   return (
      <div >
         <figure className={styleCard.cards__card}>
            <button
               className={styleCard.card__button}
               onClick={() => onClose(id)}
            >
               X
            </button>
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
            {/* Contenido extra */}
            {/* <h2>{`Estatus: ${status}`}</h2> */}
            {/* <h2>{`Origen: ${origin}`}</h2> */}
         </figure>
      </div>
   );
}

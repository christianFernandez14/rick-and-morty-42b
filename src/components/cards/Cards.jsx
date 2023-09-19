import styleCards from './Cards.module.css'
import Card from '../Card/Card'

export default function Cards({ characters, onClose }) {
   // Viendo que estoy recibiendo por propiedades
   // console.log(characters);
   return (
      <div className={styleCards.layout__cards}>
         {
            characters.map(({ id, name, status, species, gender, origin, image }) => (
               <Card
                  key={id}
                  id={id}
                  name={name}
                  status={status}
                  species={species}
                  gender={gender}
                  origin={origin.name}
                  image={image}
                  onClose={onClose}
               />
            ))
         }
      </div>
   )
}

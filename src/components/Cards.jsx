import Card from './Card';

export default function Cards({ characters }) {
   return <div>
      {
         characters.map((character, idx) => (
            <Card
               key={idx}
               name={character.name}
               status={character.status}
               species={character.species}
               gender={character.gender}
               origin={character.origin.name}
               image={character.image}
               onClose={() => window.alert('Emulamos que se cierra la Card')}
            />
         ))
      }
   </div>;
}

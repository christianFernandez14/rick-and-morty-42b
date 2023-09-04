export default function SearchBar(props) {
   return (
      <div>
         <input
            type="text"
            name="search"
            id="search"
         />
         <button onClick={props.onSearch}>Agregar</button>
      </div>
   );
}

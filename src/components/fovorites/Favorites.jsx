import React from "react";
import Cards from "../cards/Cards"
import Select from "../select/Select";
import { useSelector, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";


const Favorites = () => {

  const [aux, setAux] = React.useState(false)

  const dispatach = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites)

  /* 
    const handleOrder = (event) => {
       dispatach(orderCards(event.target.value))
    }
    const handleFilter = (event) => {
       dispatach(filterCards(event.target.value))
  
    }
   */
  //  Como alternativa de codigo, revisa esta opcion, viendo el atrubute name de los selects
  // Y sumamos una sola funcion para ambos select, psandoles los respectivos name a los select
  const handleChange = (event) => {
    if (event.target.name === 'filter') {
      dispatach(filterCards(event.target.value))
    } else {
      dispatach(orderCards(event.target.value))
      setAux(true)
    }
  }


  return (
    <div>
      <Select
        name='order'
        options={['Ascendente', 'Descendente']}
        handleChange={handleChange}
      />

      <Select
        name='order'
        options={['Male', 'Female', 'Genderless', 'unknown']}
        handleChange={handleChange}
      />
       <Cards characters={myFavorites} />
    </div>
  )
}

export default Favorites
import {
  ADD_FAV,
  REMOVE_FAV,
  FILTER,
  ORDER
} from "./action-types";

const initialState = {
  myFavorites: [],
  allFavorites: []

}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:

      return {
        ...state,
        // con esta copia me aseguro de no estar trabajando sobre el estado principal
        // de favoirte
        myFavorites: [...state.allFavorites, payload],
        allFavorites: [...state.allFavorites, payload],

      };

    case REMOVE_FAV:
      const updateFavorites = state.myFavorites.filter((favorite) => favorite.id != payload)

      return {
        ...state,
        myFavorites: updateFavorites
      };


    case FILTER:
      const filterByGender = [...state.allFavorites].filter((favorite) => favorite.gender === payload
      )

      return {
        ...state,
        myFavorites: filterByGender
      }

    case ORDER:
      // Tenemos un condicional para verlo como ordemos ascendente o descendente
      const favoritesOrdered = payload === 'Ascendente'
      ? [...state.myFavorites].sort((a, b) => a.id - b.id)
      : [...state.myFavorites].sort((a, b) => b.id - a.id)
    return {
      state,
      myFavorites: favoritesOrdered
    }

    default:
      return { ...state };
  }
}

export default reducer;
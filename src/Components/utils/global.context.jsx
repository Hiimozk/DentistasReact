import React, { createContext, useReducer, useEffect } from "react";

//inicio
const initialState = {
  theme: "light", 
  data: [],
  favorites: [],  //favs
};

const actionTypes = {
  TOGGLE_THEME: "TOGGLE_THEME",
  SET_DATA: "SET_DATA",
  ADD_FAV: "ADD_FAV", 
  REMOVE_FAV: "REMOVE_FAV",  // no precisa |letra|
};

const globalReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_THEME:
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    case actionTypes.SET_DATA:
      return { ...state, data: action.payload };
    case actionTypes.ADD_FAV:
      return { ...state, favorites: [...state.favorites, action.payload] };
    case actionTypes.REMOVE_FAV:
      return {
        ...state,
        favorites: state.favorites.filter(fav => fav.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favs")) || [];
    dispatch({ type: actionTypes.SET_DATA, payload: savedFavorites });
  }, []);

  useEffect(() => {
    // localStorage 
    localStorage.setItem("favs", JSON.stringify(state.favorites));
  }, [state.favorites]);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

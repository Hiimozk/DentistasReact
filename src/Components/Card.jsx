import React, { useContext }  from "react";
import { Link } from "react-router-dom"; 


import { GlobalContext } from "./utils/global.context.jsx"; //ctxt

const Card = ({ name, username, id }) => {
  const { state, dispatch } = useContext(GlobalContext);  // !inicio

  // favs
  const addFav = () => {
    const newFav = { name, username, id };

    // Verificar si ya está en favoritos
    const isFav = state.favorites.some((fav) => fav.id === id);
    if (!isFav) {
      dispatch({ type: "ADD_FAV", payload: newFav });  // add
    } else {
      alert("Este dentista ya está en tus favoritos");//valido
    }
  };

  return (//add
    <div className="card">
      <h3>{name}</h3>
      <p>{username}</p>
      <p>ID: {id}</p>
      <button onClick={addFav} className="favButton">Add fav</button>


      <Link to={`/dentist/${id}`} className="detailsLink">Ver detalles</Link>
    </div>
  );
};

export default Card;

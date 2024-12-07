import React, { useState, useEffect } from "react";
import Card from "../Components/Card";

const Favs = () => {
  const [favDentists, setFavDentists] = useState([]);

  // los dentistas fav localStorage
  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favs")) || [];
    setFavDentists(favs);
  }, []);

  return (
    <div className="card-grid">
      {favDentists.length > 0 ? (
        favDentists.map((dentist) => (
          <Card
            key={dentist.id}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
          />
        ))
      ) : (
        <p>No tienes dentistas favoritos.</p>
      )}
    </div>
  );
};
//°estilos°
export default Favs;

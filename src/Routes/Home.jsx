import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../Components/utils/global.context.jsx";
import Card from "../Components/Card"; 

const Home = () => {
  const { state, dispatch } = useContext(GlobalContext); 

  useEffect(() => {
    //llamado vacio
    if (state.data.length === 0) {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
          dispatch({ type: "SET_DATA", payload: data }); //ctx global
        })
        .catch((error) => console.error("Error al cargar los datos:", error)); //err
    }
  }, [state.data, dispatch]);
  console.log(state.data);
  return (
    <div className="card-grid">
      {state.data.length === 0 ? (
        <p>Cargando dentistas...</p> // loading
      ) : (
        state.data.map((dentist) => (
          <Card
            key={dentist.id} // pk
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
          />
        ))
      )}
    </div>
  );
};

export default Home;

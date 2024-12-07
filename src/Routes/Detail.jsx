import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // id
import { GlobalContext } from '../Components/utils/global.context.jsx';



const Detail = () => {
  const { state } = useContext(GlobalContext);
  const { id } = useParams(); // id del arreglo
  const [dentistDetails, setDentistDetails] = useState(null);

  useEffect(() => {
    const dentist = state.data.find((d) => d.id === parseInt(id));
    setDentistDetails(dentist);
  }, [id, state.data]);

  return (
    <div>
      {dentistDetails ? (
        <div>
          <h2>{dentistDetails.name}</h2>
          <p><strong>Username:</strong> {dentistDetails.username}</p>
          <p><strong>Email:</strong> {dentistDetails.email}</p>
          <p><strong>Phone:</strong> {dentistDetails.phone}</p>
          <p><strong>Website:</strong> <a href={dentistDetails.website} target="_blank" rel="noopener noreferrer">{dentistDetails.website}</a></p>
          
          <h3>Address</h3>
          <p><strong>Street:</strong> {dentistDetails.address.street}</p>
          <p><strong>Suite:</strong> {dentistDetails.address.suite}</p>
          <p><strong>City:</strong> {dentistDetails.address.city}</p>
          <p><strong>Zipcode:</strong> {dentistDetails.address.zipcode}</p>
          <p><strong>Geo Coordinates:</strong> Latitude: {dentistDetails.address.geo.lat}, Longitude: {dentistDetails.address.geo.lng}</p>

          <h3>Company</h3>
          <p><strong>Company Name:</strong> {dentistDetails.company.name}</p>
          <p><strong>Catchphrase:</strong> {dentistDetails.company.catchPhrase}</p>
          <p><strong>BS (Business Strategy):</strong> {dentistDetails.company.bs}</p>
        </div>
      ) : (
        <p>Cargando detalles...</p>
      )}
    </div>
  );
};
//|mejorar estilos|
export default Detail;

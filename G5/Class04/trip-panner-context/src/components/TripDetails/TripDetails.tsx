import { useContext } from "react";
import { useParams } from "react-router-dom";
import { TripContext } from "../../context/trip.context";

export const TripDetails = () => {
  const context = useContext(TripContext);
  const params = useParams(); // we get access to the path parameters of the URL

  const tripDetails = context.plannedTrips.find(
    (trip) => trip.id === Number(params.id)
  );

  return (
    <div>
      {tripDetails ? (
        <div>
          <h2>{tripDetails.title}</h2>
          <p>{tripDetails.destination}</p>
          <p>Available budget: {tripDetails.budget}</p>

          <img src={tripDetails.image} alt={tripDetails.destination} />
        </div>
      ) : (
        <h3>Trip with the id: {params.id} is not exist.</h3>
      )}
    </div>
  );
};

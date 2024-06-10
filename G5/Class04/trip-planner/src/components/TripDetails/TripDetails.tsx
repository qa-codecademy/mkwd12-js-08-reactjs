import { useParams } from "react-router-dom";
import { Trip } from "../../trip.data";

interface TripDetailsProps {
  trips: Trip[];
}

export const TripDetails = ({ trips }: TripDetailsProps) => {
  const params = useParams(); // we get access to the path parameters of the URL

  const tripDetails = trips.find((trip) => trip.id === Number(params.id));

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

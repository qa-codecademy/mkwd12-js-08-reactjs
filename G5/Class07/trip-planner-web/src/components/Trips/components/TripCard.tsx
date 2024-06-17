import { useContext } from "react";
import "./TripCard.css";
import { TripContext } from "../../../context/trip.context";
import { useNavigate } from "react-router-dom";
interface TripCardProps {
  id: string;
  notes: string;
  destination: string;
}

export const TripCard = (props: TripCardProps) => {
  const navigate = useNavigate();
  const { handleDeleteTrip } = useContext(TripContext);
  const { id, notes, destination } = props;

  return (
    <div className="tripCard">
      <h2>{destination}</h2>
      <p>{notes}</p>

      <div className="operations">
        <button
          onClick={() => {
            handleDeleteTrip(id);
          }}
        >
          Remove
        </button>
        <button onClick={() => navigate(`/trips/${id}`)}>View Details</button>
      </div>
    </div>
  );
};

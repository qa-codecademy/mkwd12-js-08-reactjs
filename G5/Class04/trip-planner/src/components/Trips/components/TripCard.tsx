import { useNavigate } from "react-router-dom";

import "./TripCard.css";

interface TripsCardProps {
  id: number;
  title: string;
  destination: string;
  budget: number;
  handleRemoveTrip: (id: number) => void;
}

export const TripCard = ({
  id,
  title,
  destination,
  budget,
  handleRemoveTrip,
}: TripsCardProps) => {
  const navigate = useNavigate();

  const navigateToDetails = () => {
    navigate(`/trips/${id}`);
  };

  return (
    <div className="tripCard">
      <h2>{title}</h2>
      <p>{destination}</p>
      <p>Available budget: {budget}</p>

      <div className="operations">
        <button onClick={() => handleRemoveTrip(Number(id))}>
          Remove Trip
        </button>
        <button onClick={navigateToDetails}>View Details</button>
      </div>
    </div>
  );
};

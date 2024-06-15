import "./TripCard.css";

interface TripCardProps {
  id: string;
  notes: string;
  destination: string;
}

export const TripCard = (props: TripCardProps) => {
  const { id, notes, destination } = props;

  return (
    <div className="tripCard">
      <h2>{destination}</h2>
      <p>{notes}</p>

      <div className="operations">
        <button>Remove</button>
        <button>View Details</button>
      </div>
    </div>
  );
};

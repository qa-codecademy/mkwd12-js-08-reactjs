import { Trip } from "../../trip.data";
import { TripCard } from "./components/TripCard";
import "./Trips.css";

interface TripsProps {
  plannedTrips: Trip[];
  handleRemoveTrip: (id: number) => void;
}

export const Trips = ({ plannedTrips, handleRemoveTrip }: TripsProps) => {
  return (
    <section className="tripsContainer">
      {plannedTrips.map((trip) => (
        <TripCard
          key={trip.id}
          id={trip.id}
          title={trip.title}
          destination={trip.destination}
          budget={trip.budget}
          handleRemoveTrip={handleRemoveTrip}
        />
      ))}
    </section>
  );
};

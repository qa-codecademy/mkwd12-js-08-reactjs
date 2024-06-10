import { useContext } from "react";
import { TripCard } from "./components/TripCard";
import "./Trips.css";
import { TripContext } from "../../context/trip.context";

export const Trips = () => {
  const { plannedTrips } = useContext(TripContext);
  console.log("context from trips.tsx", plannedTrips);

  return (
    <section className="tripsContainer">
      {plannedTrips.map((trip) => (
        <TripCard
          key={trip.id}
          id={trip.id}
          title={trip.title}
          destination={trip.destination}
          budget={trip.budget}
        />
      ))}
    </section>
  );
};

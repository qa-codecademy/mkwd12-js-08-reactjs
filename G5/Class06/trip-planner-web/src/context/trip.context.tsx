import { createContext, ReactNode, useState, useEffect } from "react";
import { DraftTrip, Trip } from "../types/trip";
import { createTrip, fetchTrips } from "../services/trip.service";

interface TripContext {
  plannedTrips: Trip[];
  handleCreateTrip: (draftTrip: DraftTrip) => Promise<void>;
}

const defaultContextValues: TripContext = {
  plannedTrips: [],
  handleCreateTrip: async () => {},
};

export const TripContext = createContext(defaultContextValues);

interface TripContextProviderProps {
  children: ReactNode; // Same as React.ReactNode
}

export const TripContextProvider = ({ children }: TripContextProviderProps) => {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [formErros, setFormErrors] = useState({
    destination: undefined,
    notes: undefined,
  });

  const handleFetchTrips = async () => {
    // fetch the data
    const trips = await fetchTrips();

    setTrips(trips);
  };

  const handleCreateTrip = async (draftTrip: DraftTrip) => {
    try {
      const response = await createTrip(draftTrip);
      console.log(response);

      await handleFetchTrips();
    } catch (error) {
      console.log(error);
      // setFormErrors({
      //   destination:
      // })
      // TODO: Handle error if happens (set in error state for example)
    }
  };

  // 1. Komponentata se ragja
  useEffect(() => {
    handleFetchTrips();
  }, []);

  // THIS EFFECT WILL EXECUTE WHENEVER CHANGE TO THE TRIP STATE PROP HAPPENS
  useEffect(() => {
    console.log("I will execute when change on trip state prop happens");
  }, [trips]);

  return (
    <TripContext.Provider
      value={{
        plannedTrips: trips,
        handleCreateTrip,
      }}
    >
      {children}
    </TripContext.Provider>
  );
};

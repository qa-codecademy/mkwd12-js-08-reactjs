import { createContext, ReactNode, useState, useEffect } from "react";
import { Trip } from "../types/trip";
import { fetchTrips } from "../services/trip.service";

interface TripContext {
  plannedTrips: Trip[];
}

const defaultContextValues: TripContext = {
  plannedTrips: [],
};

export const TripContext = createContext(defaultContextValues);

interface TripContextProviderProps {
  children: ReactNode; // Same as React.ReactNode
}

export const TripContextProvider = ({ children }: TripContextProviderProps) => {
  const [trips, setTrips] = useState<Trip[]>([]);

  const handleFetchTrips = async () => {
    // fetch the data
    const trips = await fetchTrips();

    setTrips(trips);
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
      }}
    >
      {children}
    </TripContext.Provider>
  );
};

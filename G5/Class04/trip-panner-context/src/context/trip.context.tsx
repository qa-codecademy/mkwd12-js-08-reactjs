import { createContext, ReactNode, useState } from "react";
import { Trip, trips } from "../trip.data";

interface UserMe {
  fullName: string;
  city: string;
}

// STEP 1: Interface of how our context will look like. Meaning this are the values that are going to be shared within the components using the context
interface TripContext {
  plannedTrips: Trip[];
  handleRemoveTrip: (id: number) => void;
  handleAddTrip: (
    title: string,
    destination: string,
    budget: number,
    image: string
  ) => void;
  userMe: UserMe;
}

// STEP 2: Create the default values of the context
const contextDefaultValues: TripContext = {
  plannedTrips: trips,
  handleRemoveTrip: (id: number) => {},
  handleAddTrip: (title, destination, budget, image) => {},
  userMe: {
    fullName: "",
    city: "",
  },
};

// STEP 3: Create the context with the method createContext from react and we provide as an arugment the default values for the context
export const TripContext = createContext(contextDefaultValues);

interface TripContextProviderProps {
  children: ReactNode;
}

// STEP 4: Create the Context provider
export const TripContextProvider = ({ children }: TripContextProviderProps) => {
  const [plannedTrips, setPlannedTrips] = useState<Trip[]>(trips);

  const handleRemoveTrip = (id: number) => {
    const filteredTrips = plannedTrips.filter((trip) => trip.id !== id);

    setPlannedTrips(filteredTrips);
  };

  const handleAddTrip = (
    title: string,
    destination: string,
    budget: number,
    image: string
  ) => {
    const trip: Trip = {
      id: Date.now(),
      title,
      destination,
      budget,
      image,
      status: "PLANNING",
    };

    setPlannedTrips([...plannedTrips, trip]);
  };

  return (
    <TripContext.Provider
      value={{
        plannedTrips,
        handleRemoveTrip,
        handleAddTrip,
        userMe: {
          fullName: "John Doe",
          city: "Some City",
        },
      }}
    >
      {children}
    </TripContext.Provider>
  );
};

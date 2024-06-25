import { createContext, ReactNode, useState, useEffect } from "react";
import { DraftTrip, Trip } from "../types/trip";
import {
  createTrip,
  deleteTrip,
  fetchTrips,
  getTripDetails,
} from "../services/trip.service";
import { isAuthenticated } from "../utils/auth";

interface TripContext {
  plannedTrips: Trip[];
  isLoading: boolean;
  handleCreateTrip: (draftTrip: DraftTrip) => Promise<void>;
  handleDeleteTrip: (tripId: string) => Promise<void>;
  handleGetTripById: (tripId: string) => Promise<Trip | undefined>;
}
const defaultTrip: Trip = {} as Trip;
const defaultContextValues: TripContext = {
  plannedTrips: [],
  isLoading: false,
  handleCreateTrip: async () => {},
  handleDeleteTrip: async () => {},
  handleGetTripById: async () => defaultTrip,
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
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleFetchTrips = async () => {
    setIsLoading(true);

    if (isLoading) return;

    // fetch the data
    const trips = await fetchTrips();

    setTrips(trips);
    setIsLoading(false);
  };

  const handleCreateTrip = async (draftTrip: DraftTrip) => {
    setIsLoading(true);

    try {
      if (isLoading) return; // if request is already ongoing Exit the function

      const response = await createTrip(draftTrip);
      console.log(response);

      // OPTION 1: Refetch the TRIPS
      await handleFetchTrips();

      // OPTION 2:
      // SET STATE MANUALLY BY ADDTION THE NEW TRIP TO THE STATE
    } catch (error) {
      console.log(error);
      // setFormErrors({
      //   destination:
      // })
      // TODO: Handle error if happens (set in error state for example)
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteTrip = async (tripId: string) => {
    setIsLoading(true);
    try {
      const data = await deleteTrip(tripId);

      // OPTION 1:
      // SET STATE MANUALLY (DELETE THE TRIP) IF API REQUEST SUCCEDED
      const remainingTrips = trips.filter((trip) => trip.id !== tripId);
      setTrips(remainingTrips);

      // OPTION 2:
      // OPTION TWO TO REFETCH THE UPDATED TRIPS FROM SERVER
      // await handleFetchTrips();
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGetTripById = async (tripId: string) => {
    setIsLoading(true);

    try {
      const tripDetails = await getTripDetails(tripId);

      return tripDetails;
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  // 1. Komponentata se ragja
  useEffect(() => {
    if (!isAuthenticated) return;
    handleFetchTrips();
  }, []);

  return (
    <TripContext.Provider
      value={{
        plannedTrips: trips,
        isLoading,
        handleCreateTrip,
        handleDeleteTrip,
        handleGetTripById,
      }}
    >
      {children}
    </TripContext.Provider>
  );
};

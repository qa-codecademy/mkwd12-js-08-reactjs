import { DraftTrip, Trip, TripCreationProps } from "../types/trip";
import { fetchWithAuth } from "../utils/request";

export const fetchTrips = async () => {
  const responseTrips = await fetchWithAuth("http://localhost:3000/trip");

  const data: Trip[] = await responseTrips.json();
  return data;
};

export const createTrip = async (draftTrip: DraftTrip) => {
  const tripCreationProps: TripCreationProps = {
    destination: draftTrip.destination,
    status: draftTrip.status,
    notes: draftTrip.notes,
    imageUrl: draftTrip.imageUrl,
    budget: {
      currency: draftTrip.currency,
      amount: Number(draftTrip.amount),
    },
    startDate: new Date(draftTrip.startDate).getTime(),
    endDate: new Date(draftTrip.endDate).getTime(),
  };

  const response = await fetchWithAuth("http://localhost:3000/trip", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tripCreationProps),
  });

  const data = await response.json();
  return data;
};

export const deleteTrip = async (tripId: string) => {
  const response = await fetchWithAuth(`http://localhost:3000/trip/${tripId}`, {
    method: "DELETE",
  });

  const data = await response.json();

  return data;
};

export const getTripDetails = async (tripId: string) => {
  const response = await fetchWithAuth(`http://localhost:3000/trip/${tripId}`);

  const data: Trip = await response.json();

  return data;
};

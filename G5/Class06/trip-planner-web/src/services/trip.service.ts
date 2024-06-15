import { DraftTrip, Trip, TripCreationProps } from "../types/trip";

export const fetchTrips = async () => {
  // axios
  const response = await fetch("http://localhost:3000/trip");

  const data: Trip[] = await response.json();

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

  const response = await fetch("http://localhost:3000/trip", {
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
  const response = await fetch(`http://localhost:3000/trip/${tripId}`, {
    method: "DELETE",
  });

  const data = await response.json();

  return data;
};

export const getTripDetails = async (tripId: string) => {
  const response = await fetch(`http://localhost:3000/trip/${tripId}`);

  const data: Trip = await response.json();

  return data;
};

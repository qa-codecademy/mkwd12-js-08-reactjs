import { Trip } from "../types/trip";

export const fetchTrips = async () => {
  // axios
  const response = await fetch("http://localhost:3000/trip");

  const data: Trip[] = await response.json();

  return data;
};

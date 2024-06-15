import { useParams } from "react-router-dom";

import "./TripDetails.css";
import { useContext, useEffect, useState } from "react";
import { TripContext } from "../../context/trip.context";
import { Trip } from "../../types/trip";

export const TripDetails = () => {
  const { handleGetTripById } = useContext(TripContext);
  const [tripDetails, setTripDetials] = useState<Trip | undefined>(undefined);

  const params = useParams();
  const id = params.id;

  console.log(tripDetails);

  useEffect(() => {
    if (!id) return;
    // API REQUEST => GET TRIP BY ID
    console.log("id in use effect in details", id);
    handleGetTripById(id).then((trip) => {
      if (trip) {
        setTripDetials(trip);
      }
    });
  }, [id]);

  return (
    <div className="wrapper">
      {tripDetails ? (
        <div className="detailsContainer">
          <div className="detailsHeading">
            <h2>{tripDetails.destination}</h2>
            <p onClick={() => console.log("edit")}>Edit</p>
          </div>

          <p>{tripDetails.notes}</p>
          <p>Available amount: {tripDetails.budget.amount}</p>
          <p>
            From: {new Date(+tripDetails.startDate).toDateString()} - to:{" "}
            {new Date(+tripDetails.endDate).toDateString()}
          </p>
          <img src={tripDetails.imageUrl} alt={tripDetails.destination} />
        </div>
      ) : (
        <div>No trip found</div>
      )}
    </div>
  );
};

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Trips } from "./components/Trips/Trips";
import { TripDetails } from "./components/TripDetails/TripDetails";
import { Contact } from "./components/Contact/Contact";
import { useState } from "react";
import { Trip, trips } from "./trip.data";
import { AddTrip } from "./components/Add-Trip/AddTrip";

function App() {
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
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="trips"
          element={
            <Trips
              plannedTrips={plannedTrips}
              handleRemoveTrip={handleRemoveTrip}
            />
          }
        />

        <Route
          path="trips/:id"
          element={<TripDetails trips={plannedTrips} />}
        />

        <Route path="contact" element={<Contact />} />

        <Route
          path="add-trip"
          element={<AddTrip handleAddTrip={handleAddTrip} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

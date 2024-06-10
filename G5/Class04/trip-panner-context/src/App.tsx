import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Trips } from "./components/Trips/Trips";
import { TripDetails } from "./components/TripDetails/TripDetails";
import { Contact } from "./components/Contact/Contact";
import { AddTrip } from "./components/Add-Trip/AddTrip";
import { TripContextProvider } from "./context/trip.context";

function App() {
  return (
    <TripContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="trips" element={<Trips />} />
          <Route path="trips/:id" element={<TripDetails />} />
          <Route path="contact" element={<Contact />} />
          <Route path="add-trip" element={<AddTrip />} />
        </Routes>
      </BrowserRouter>
    </TripContextProvider>
  );
}

export default App;

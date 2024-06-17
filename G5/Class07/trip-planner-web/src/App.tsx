import { BrowserRouter, Route, Routes } from "react-router-dom";

import { TripContextProvider } from "./context/trip.context";

import { Header } from "./components/Header/Header";
import { Trips } from "./components/Trips/Trips";
import { Container } from "./layouts/Container";
import { AddTrip } from "./components/AddTrip/AddTrip";
import { TripDetails } from "./components/TripDetails/TripDetails";

function App() {
  return (
    <TripContextProvider>
      <BrowserRouter>
        <Container>
          <Header />

          <Routes>
            <Route path="/" element={<h1>Home</h1>} />

            <Route path="/trips" element={<Trips />} />

            <Route path="/add-trip" element={<AddTrip />} />

            <Route path="/trips/:id" element={<TripDetails />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </TripContextProvider>
  );
}

export default App;

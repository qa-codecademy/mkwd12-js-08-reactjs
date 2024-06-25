import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";

import { TripContextProvider } from "./context/trip.context";

import { Header } from "./components/Header/Header";
import { Trips } from "./components/Trips/Trips";
import { Container } from "./layouts/Container";
import { AddTrip } from "./components/AddTrip/AddTrip";
import { TripDetails } from "./components/TripDetails/TripDetails";
import { Login } from "./components/Auth/Login/Login";
import { Register } from "./components/Auth/Register/Register";
import { AuthContextProvider } from "./context/auth.context";
import { isAuthenticated } from "./utils/auth";

interface ProtectedRouteProps {
  isAllowed: boolean;
  children: React.ReactNode;
}

const ProtectedRoute = ({ isAllowed, children }: ProtectedRouteProps) => {
  if (!isAllowed) {
    return <Navigate to="/login" />;
  }

  return children;
};

function App() {
  return (
    <AuthContextProvider>
      <TripContextProvider>
        <BrowserRouter>
          <Container>
            <Header />

            <Routes>
              <Route path="/" element={<h1>Home</h1>} />

              <Route
                path="/trips"
                element={
                  <ProtectedRoute isAllowed={isAuthenticated}>
                    <Trips />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/add-trip"
                element={
                  <ProtectedRoute isAllowed={isAuthenticated}>
                    <AddTrip />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/trips/:id"
                element={
                  <ProtectedRoute isAllowed={isAuthenticated}>
                    <TripDetails />
                  </ProtectedRoute>
                }
              />

              <Route path="/login" element={<Login />} />

              <Route path="/register" element={<Register />} />
            </Routes>
          </Container>
        </BrowserRouter>
      </TripContextProvider>
    </AuthContextProvider>
  );
}

export default App;

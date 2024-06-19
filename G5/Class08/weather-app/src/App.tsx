import "./App.css";
import Container from "./layouts/Container"; // Default import
import { ForecastComponent } from "./components/Forecast/Forecast"; // named import

function App() {
  return (
    <Container>
      <ForecastComponent />
    </Container>
  );
}

export default App;

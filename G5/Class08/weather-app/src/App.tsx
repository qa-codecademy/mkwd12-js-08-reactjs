import "./App.css";
import Container from "./layouts/Container"; // Default import
import { Forecast } from "./components/Forecast/Forecast"; // named import

function App() {
  return (
    <Container>
      <Forecast />
    </Container>
  );
}

export default App;

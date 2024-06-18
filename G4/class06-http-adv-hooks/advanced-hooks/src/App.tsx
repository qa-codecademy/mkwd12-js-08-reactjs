import "./App.css";
import UseCallbackExample from "./Components/UseCallbackExample/UseCallbackExample";
import { UseMemoExample } from "./Components/UseMemoExample/UseMemoExample";
import { UseRefExample } from "./Components/UseRefExample/UseRefExample";

function App() {
  return (
    <main>
      <UseCallbackExample />
      <UseMemoExample />
      <UseRefExample />
    </main>
  );
}

export default App;

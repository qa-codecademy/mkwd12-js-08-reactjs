import { useState } from "react";
import "./App.css";
import { UseCallBackExample } from "./components/UseCallback";
import { UseMemoExample } from "./components/UseMemo";

function App() {
  return (
    <>
      {/* <UseCallBackExample /> */}
      <UseMemoExample />
    </>
  );
}

export default App;

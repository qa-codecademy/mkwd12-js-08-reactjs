import MyInformation from "./components/MyInformation";
import Header from "./components/Header";
import { Parent } from "./components/Parent";

function App() {
  // I can still have some JS logics
  const subjectName = "React JS";
  console.log(subjectName);

  const todayDate = new Date().toLocaleString();

  return (
    /**
     * React JSX Expression can have only 1 parent element
     * We can wrap it using div or another HTML element or we can use
     * REACT.FRAGMENT
     *
     * <> </> IS SAME AS <React.Fragment> </React.Fragment>
     * Important => React fragment cannot be styled
     */
    <>
      <Header />
      <main>
        <h1>Hello from {subjectName}</h1>
        <p>Today is our first {subjectName} class</p>
        <p>Todays date is: {todayDate}</p>

        <MyInformation />

        <hr />
        <Parent />
      </main>
    </>
  );
}

export default App;

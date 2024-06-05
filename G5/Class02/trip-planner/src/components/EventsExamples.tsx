import { useEffect, useState } from "react";

export const EventsExamples = () => {
  // [name of variable, function that will change the value of the state variable]
  const [count, setCount] = useState<number>(0); // the value in useState(0) is the default value of the state variable count
  const [tripDestination, setTripDestination] = useState<string>("");
  const [trips, setTrips] = useState<string[]>(["London", "Barcelona"]);
  const [shouldShow, setShouldShow] = useState(false);

  const handleIncrement = () => {
    console.log("Button increment is clicked");

    setCount(count + 1);
    console.log(count);
  };

  const handleDecrement = (message: string) => {
    console.log("Button decrement is clicked " + message);

    setCount(count - 1);
    console.log(count);
  };

  const handleChange = (value: string) => {
    console.log(`${value}`);
    setTripDestination(value);
  };

  const addTrip = () => {
    setTrips([...trips, tripDestination]);
    setTripDestination("");
  };

  const toggleShow = () => {
    setShouldShow(!shouldShow);
  };

  useEffect(() => {
    if (!shouldShow) {
      // do this logic
      return;
    }
    // another logic here
  }, [shouldShow]);

  useEffect(() => {
    console.log("new trip added");
  }, [trips]);
  return (
    <section>
      <h2>Events examples</h2>
      <p>Count is: {count}</p>
      {/* 1st approach */}
      <button onClick={handleIncrement}>Increment</button>
      {/* 2nd approch */}
      <button onClick={() => handleDecrement("decrement message")}>
        Decrement
      </button>

      <hr />
      <h2>{tripDestination}</h2>
      <div>
        <input
          type="text"
          placeholder="Add trip destination"
          value={tripDestination} // Controlled input
          onChange={(event) => handleChange(event.target.value)}
        />
        <button onClick={addTrip}>Add trip</button>
      </div>

      <ul>
        {trips.map((trip) => (
          <li key={trip}>{trip}</li>
        ))}
      </ul>

      <hr />

      {/* Bad practice! Do not use state changing function directly in the JSX */}
      {/* <button onClick={() => setShouldShow(!shouldShow)}>Toggle Show</button> */}
      <button onClick={() => toggleShow()}>Toggle Show</button>
      {/* If shouldShow is true the below section will be shown */}
      {shouldShow ? (
        <section>
          <div
            style={{
              backgroundColor: "red",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
            }}
          ></div>
          <div
            style={{
              backgroundColor: "yellow",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
            }}
          ></div>
        </section>
      ) : (
        <section>
          <div
            style={{
              backgroundColor: "green",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
            }}
          ></div>
          <div
            style={{
              backgroundColor: "magenta",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
            }}
          ></div>
        </section>
      )}
    </section>
  );
};

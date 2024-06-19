import { useState } from "react";
import "./Forecast.css";
import { Search } from "../Search/Search";

export const Forecast = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const handleChangeActiveTab = () => {
    const value = activeTab === "Home" ? "Hourly" : "Home";
    setActiveTab(value);
  };

  const tabValues = ["Home", "Hourly"];

  /**
   * Exercise 2
   * - Create a function handleSearch that will accept 1 parameter searchValue and console log the parameter
   * - Pass this function to the Search component as props
   * - When the button Search is clicked, call this function
   */
  return (
    <section className="forecastContainer">
      <div className="navigation">
        <h2>{activeTab}</h2>
        <div className="tabItems">
          {tabValues.map((value) => (
            <p key={value} onClick={handleChangeActiveTab}>
              {value}
            </p>
          ))}
        </div>
      </div>

      <Search />
    </section>
  );
};

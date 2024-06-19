import { useState } from "react";
import "./Forecast.css";
import { Search } from "../Search/Search";
import { Forecast, getWeather } from "../../services/weather.service";
import { HourlyData } from "../HourlyData/HourlyData";

export const ForecastComponent = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [forecastData, setForecastData] = useState<Forecast | undefined>();

  const handleChangeActiveTab = (tabValue: string) => {
    setActiveTab(tabValue);
  };

  const handleSearch = async (searchValue: string) => {
    console.log(searchValue);
    // Make api request here

    const data = await getWeather(searchValue);

    setForecastData(data);
    // Next step: We gonna save the data in some state property
  };

  return (
    <section className="forecastContainer">
      <div className="navigation">
        <h2>{activeTab}</h2>
        <div className="tabItems">
          <p onClick={() => handleChangeActiveTab("Home")}>Home</p>
          <p onClick={() => handleChangeActiveTab("Hourly")}>Hourly</p>
        </div>
      </div>

      {activeTab === "Home" ? (
        <section>
          <Search handleSearch={handleSearch} />
          {/* TODO: Move this into a component */}
          {forecastData && (
            <div>
              <p>{forecastData.city.name}</p>
              <p>Temperature is: {forecastData.city.temperature}</p>
              <p>Feels like : {forecastData.city.feelsLike}</p>
              <img
                src={`http://openweathermap.org/img/w/${forecastData.city.icon}.png`}
                alt="iconOfWeather"
              />
            </div>
          )}
        </section>
      ) : (
        <section>
          {forecastData && <HourlyData data={forecastData.hourly} />}
        </section>
      )}
    </section>
  );
};

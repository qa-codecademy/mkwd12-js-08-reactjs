import { HourlyForecast } from "../../services/weather.service";
import "./HourlyData.css";

interface HourlyDataProps {
  data: HourlyForecast[];
}
export const HourlyData = ({ data }: HourlyDataProps) => {
  return (
    <div>
      {data.map((forecast) => (
        <div key={forecast.time}>
          <p>Temperature :{forecast.temperature}</p>
          <p>Measurement at: {forecast.time}</p>
          <img
            src={`http://openweathermap.org/img/w/${forecast.icon}.png`}
            alt="icon"
          />
        </div>
      ))}
    </div>
  );
};

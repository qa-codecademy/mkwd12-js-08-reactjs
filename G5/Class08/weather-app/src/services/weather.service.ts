export interface HourlyForecast {
  temperature: number;
  feelsLike: number;
  icon: string;
  time: string;
}

export interface Forecast {
  city: {
    name: string;
    sunrise: number;
    sunset: number;
  } & HourlyForecast;

  hourly: HourlyForecast[];
}

function forecastMapper(result: any): Forecast {
  return {
    city: {
      name: result.city.name,
      sunrise: result.city.sunrise,
      sunset: result.city.sunset,
      temperature: result.list[0].main.temp,
      feelsLike: result.list[0].main.feels_like,
      icon: result.list[0].weather[0].icon,
      time: result.list[0].dt_txt,
    },

    hourly: result.list.map((forecastMeasurement) => {
      console.log(forecastMeasurement);
      return {
        temperature: forecastMeasurement.main.temp,
        feelsLike: forecastMeasurement.main.feels_like,
        icon: forecastMeasurement.weather[0].icon,
        time: forecastMeasurement.dt_txt,
      };
    }),
  };
}

export const getWeather = async (searchValue: string): Promise<Forecast> => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${searchValue}&units=metric&APPID=${
      import.meta.env.VITE_APPID
    }`
  );

  const result = await response.json();

  const forecastData: Forecast = forecastMapper(result);

  console.log("result is:", result);
  console.log("normalized data is: ", forecastData);

  return forecastData;
};

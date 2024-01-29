import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { ICityProperties } from "../CityInput/CityInput.component";
import getWeatherFromCoords from "../../services/getWeatherFromCoords";
import Box from "@mui/material/Box";

export interface IWeatherStatusProps {
  cityProps: ICityProperties | null;
}

function WeatherStatusComponent(props: IWeatherStatusProps) {
  const [weather, setWeather] = useState<any>(null);
  const getWeather = async () => {
    if (props.cityProps?.coords) {
      const weather = await getWeatherFromCoords(props.cityProps?.coords);
      setWeather(weather);
    }
  };

  useEffect(() => {
    setWeather(null);
  }, [props.cityProps?.coords?.lat, props.cityProps?.coords?.lng])

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

      }}
    >
      <Button variant="outlined" disabled={!props.cityProps?.coords} onClick={getWeather}>
        {props.cityProps?.name ?  `Get Weather for ${props.cityProps?.name}` : `Choose a city or use the geolocation`}
      </Button>
      {weather && (
        <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "space-between",
  
        }}>
          <h2>{weather?.current.temp} °</h2>
          <img
            src={`http://openweathermap.org/img/w/${weather?.current.weather[0].icon}.png`}
            alt={weather?.current.weather[0].description}
          />
        </Box>
      )}
    </Box>
  );
}

export default WeatherStatusComponent;

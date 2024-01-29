import React, { useState } from "react";
import Button from "@mui/material/Button";
import { ICityProperties } from "../CityInput/CityInput.component";
import getWeatherFromCoords from "../../services/getWeatherFromCoords";

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

  return (
    <div>
      <Button variant="outlined" onClick={getWeather}>
        Get Weather
      </Button>
      {JSON.stringify(weather)}
    </div>
  );
}

export default WeatherStatusComponent;

import React from 'react';
import Button from "@mui/material/Button";
import { ICityProperties } from '../CityInput/CityInput.component';
import getWeatherFromCoords from '../../services/getWeatherFromCoords';

export interface IWeatherStatusProps {
  cityProps: ICityProperties | null;
}

function WeatherStatusComponent(props: IWeatherStatusProps) {
  const getWeather = async () => {
    if (props.cityProps?.coords) {
      const weather = await getWeatherFromCoords(props.cityProps?.coords)
      console.log(weather)
    }
  }

  return (
    <div>
        {/* get weather from city */}
        {/* display weather */}
        here goes the status
      <Button variant="outlined" onClick={getWeather}>
        Get Weather
      </Button>
    </div>
  );
}

export default WeatherStatusComponent;

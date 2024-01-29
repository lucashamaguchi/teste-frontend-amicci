import React, { useState } from 'react';
import './App.css';
import CityInput, { ICityProperties } from './components/CityInput/CityInput.component';
import WeatherStatus from './components/WeatherStatus/WeatherStatus.component';
import Geolocation from './components/Geolocation/Geolocation.component';

function App() {
  const [city, setCity] = useState<string | null>(null);

  const onSelectCity = (cityProps: ICityProperties) => {
    setCity(cityProps.name);
  }

  return (
    <div className="App">
      <CityInput  onSelect={onSelectCity}/>
      <Geolocation onSelect={onSelectCity}/>
      <WeatherStatus city={city} />
    </div>
  );
}

export default App;

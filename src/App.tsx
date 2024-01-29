import React, { useState } from 'react';
import './App.css';
import CityInput, { ICityProperties } from './components/CityInput/CityInput.component';
import WeatherStatus from './components/WeatherStatus/WeatherStatus.component';
import Geolocation from './components/Geolocation/Geolocation.component';

function App() {
  const [cityProps, setCityProps] = useState<ICityProperties | null>(null);


  return (
    <div className="App">
      <CityInput  onSelect={setCityProps}/>
      <Geolocation onSelect={setCityProps}/>
      <WeatherStatus cityProps={cityProps} />
      {JSON.stringify(cityProps)}
    </div>
  );
}

export default App;

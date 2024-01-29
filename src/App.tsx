import React, { useState } from 'react';
import './App.css';
import CityInput, { ICityProperties } from './components/CityInput/CityInput.component';
import WeatherStatus from './components/WeatherStatus/WeatherStatus.component';

function App() {
  const [city, setCity] = useState<string | null>(null);

  const onSelectCity = (cityProps: ICityProperties) => {
    setCity(cityProps.name);
  }
  return (
    <div className="App">
      <CityInput  onSelect={onSelectCity}/>
      <WeatherStatus city={city} />
    </div>
  );
}

export default App;

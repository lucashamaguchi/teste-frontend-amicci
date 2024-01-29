import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import getCoordsFromCity from '../../services/getCoordsFromCity';

export interface ICityProperties {
  name: string;
  coords: {
    lat: number | null;
    lng: number | null;
  }
}

export interface ICityInputProps {
  onSelect: (cityProperties: ICityProperties) => void;
}

function CityInputComponent(props: ICityInputProps) {
  const [city, setCity] = useState('');
  const getCity = async () => {
    const resp = await getCoordsFromCity(city);
    props.onSelect({name: city, coords: resp.results[0].geometry.location});
  }
  return (
    <div>
        {/* text input (with completion?) to get city */}
        {/* button to submit that runs onSelect function */}
        here goes the input
        <TextField id="outlined" label="City" variant="outlined" size='small' onChange={(event) => setCity(event.target.value)}/>
        <Button variant="outlined" onClick={getCity}>
        Get city
      </Button>
    </div>
  );
}

export default CityInputComponent;

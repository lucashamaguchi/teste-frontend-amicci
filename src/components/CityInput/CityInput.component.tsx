import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import getCoordsFromCity from "../../services/getCoordsFromCity";
import styled from "styled-components";

export interface ICityProperties {
  name: string;
  coords: {
    lat: number | null;
    lng: number | null;
  };
}

export interface ICityInputProps {
  onSelect: (cityProperties: ICityProperties) => void;
}

const TextFieldStyle = styled.div`
  margin: 30px auto;
`;

const ButtonStyle = styled.div`
  margin: 30px auto;
`;

function CityInputComponent(props: ICityInputProps) {
  const [city, setCity] = useState("");
  const getCity = async () => {
    const resp = await getCoordsFromCity(city);
    props.onSelect({ name: city, coords: resp.results[0].geometry.location });
  };
  return (
    <div>
      <TextFieldStyle>
        <TextField
          id="outlined"
          label="City"
          variant="outlined"
          size="small"
          onChange={(event) => setCity(event.target.value)}
        />
      </TextFieldStyle>
      <ButtonStyle>
        <Button variant="outlined" onClick={getCity}>
          Get city
        </Button>
      </ButtonStyle>
    </div>
  );
}

export default CityInputComponent;

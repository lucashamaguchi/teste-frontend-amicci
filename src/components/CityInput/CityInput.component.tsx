import React from 'react';


export interface ICityProperties {
  name: string;
}

export interface ICityInputProps {
  onSelect: (cityProperties: ICityProperties) => void;
}

function component(props: ICityInputProps) {
  return (
    <div>
        {/* text input (with completion?) to get city */}
        {/* button to submit that runs onSelect function */}
        here goes the input
    </div>
  );
}

export default component;

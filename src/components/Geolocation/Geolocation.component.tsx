import React from 'react';

export interface IWeatherStatusProps {
  city: string | null;
}

function component(props: IWeatherStatusProps) {
  return (
    <div>
        {/* button to ask for geolocation */}
        {/* get city from geolocation */}
        here goes the button to get geolocation
    </div>
  );
}

export default component;

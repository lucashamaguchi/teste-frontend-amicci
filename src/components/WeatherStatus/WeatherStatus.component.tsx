import React from 'react';

export interface IWeatherStatusProps {
  city: string | null;
}

function component(props: IWeatherStatusProps) {
  return (
    <div>
        {/* get weather from city */}
        {/* display weather */}
        here goes the status
    </div>
  );
}

export default component;

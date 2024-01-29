import axios from 'axios';

async function getCityFromCoordinates(coords: {lat: number | null, lng: number | null}) {
  const key = 'AIzaSyDtrsE6xhEUyV7feXRpDm3C11-XONrH7MM';
  const response = await axios.get<any>(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.lat},${coords.lng}&key=${key}`);
  return response.data;
}

export default getCityFromCoordinates;

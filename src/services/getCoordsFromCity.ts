import axios from 'axios';

async function getCoordsFromCity(address: string) {
  const key = 'AIzaSyDtrsE6xhEUyV7feXRpDm3C11-XONrH7MM';
  const response = await axios.get<any>(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${key}`);
  return response.data;
}

export default getCoordsFromCity;

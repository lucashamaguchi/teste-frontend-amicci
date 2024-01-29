import axios from 'axios';

// import IAddress from '@interfaces/common/IAddress';

async function getCityFromCoordinates(coords: {lat: number, lng: number}) {
  const response = await axios.get<any>(`https://brasilapi.com.br/api/cep/v1/${zipcode}`);
  return response.data;
}

export default getCityFromCoordinates;

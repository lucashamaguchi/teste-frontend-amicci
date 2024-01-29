import axios from "axios";

async function getWeather(coords: { lat: number | null; lng: number | null }) {
  const key = "49b8ff377a814e8cd0a8892e0cf14963";
  const response = await axios.get<any>(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${coords.lat}&lon=${coords.lng}&appid=${key}`
  );
  return response.data;
}

export default getWeather;

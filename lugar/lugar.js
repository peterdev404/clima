const axios = require("axios");
const getLugarLatLng = async (dir) => {
  const encodeUrl = encodeURI(dir);
  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${dir}`,
    headers: {
      "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
      "x-rapidapi-key": "5925djsn8185c85b7b29",
    },
  });
  const resp = await instance.get();
  if (resp.data.Results === 0) {
    throw new Error(`No hay resultados para: ${dir}`);
  }
  const data = resp.data.Results[0];
  const direccion = data.name;
  const lat = data.lat;
  const lon = data.lon;
  return {
    direccion,
    lat,
    lon,
  };
};
module.exports = {
  getLugarLatLng,
};

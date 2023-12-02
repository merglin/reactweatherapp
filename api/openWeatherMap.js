const axios = require("axios");

let OWA_KEY = process.env.OWA_KEY;
if (typeof OWA_KEY === "undefined") OWA_KEY = require("../secret").OWA_KEY;

const OPEN_WEATHER_MAP_WEATHER_API_URL = function (lat, long) {
  console.log(
    `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${long}&appid=${OWA_KEY}`
  );
  return `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${long}&appid=${OWA_KEY}`;
};

const OPEN_WEATHER_MAP_GEOCODE_URL = function (location) {
  location = location = encodeURIComponent(location);
  return `https://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${OWA_KEY}`;
};

function handleError(result) {
  if (result.data.cod && result.data.message) {
    throw new Error(res.data.message);
  }
}

function handleNoResults(result) {
  if (result.data.length === 0) throw new Error("No matching location");
}

module.exports = {
  getTemp: function (location) {
    return axios
      .get(OPEN_WEATHER_MAP_GEOCODE_URL(location))
      .then(function (result) {
        handleNoResults(result);
        return axios
          .get(
            OPEN_WEATHER_MAP_WEATHER_API_URL(
              result.data[0].lat,
              result.data[0].lon
            )
          )
          .then(function (result) {
            handleError(result);
            console.log("Got here: " + Object.keys(result.data.main));
            return result.data.main.temp;
          });
      });
  },
};

const axios = require("axios");

module.exports = {
  getTemp: function (location) {
    return axios.get(`/weather/${location}`).then(function (result) {
      console.log(result);
      return result.data.temp;
    });
  },
};

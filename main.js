const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";
const url = "http://localhost:5000/constellations";

function getAllNames() {
  const returnArr = [];
  axios
    .get(url)
    .then((response) => {
      const result = response.data.filter((constellation) => {
        return constellation.starsWithPlanets;
      });
      for (let resultKey of result) {
        returnArr.push(resultKey.name);
      }
      console.log(returnArr);
    })
}



function getConstellationsByQuadrant(quadrant) {
  axios
    .get(url)
    .then((response) => {
      const result = response.data.filter((constellation) => {
        return constellation.quadrant === quadrant;
      });
      console.log(result);
    })
}





module.exports = {
  getAllNames,
  getConstellationsByQuadrant,
};const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";
const url = "http://localhost:5000/constellations";

function getAllNames() {
  const returnArr = [];
  axios
    .get(url)
    .then((response) => {
      const result = response.data.filter((constellation) => {
        return constellation.starsWithPlanets;
      });
      for (let resultKey of result) {
        returnArr.push(resultKey.name);
      }
      console.log(returnArr);
    })
}



function getConstellationsByQuadrant(quadrant) {
  axios
    .get(url)
    .then((response) => {
      const result = response.data.filter((constellation) => {
        return constellation.quadrant === quadrant;
      });
      console.log(result);
    })
}





module.exports = {
  getAllNames,
  getConstellationsByQuadrant,
};

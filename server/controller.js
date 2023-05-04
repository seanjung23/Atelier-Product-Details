const axios = require('axios');
require('dotenv').config();

const config = {
  headers: {
    Authorization: process.env.API_TOKEN
  }
};

module.exports = {

  getProducts: (req, res, callback) => {

    let requestURL = process.env.API_URL + req.path;

    axios.get(requestURL, config)
      .then(result => {

        callback(result.data);
      })
      .catch(err => console.log(err));
}
}
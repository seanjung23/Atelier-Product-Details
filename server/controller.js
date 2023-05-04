const axios = require('axios');
require('dotenv').config();

module.exports = {

  getProductInfo: (req, res, callback) => {

    let requestURL = process.env.API_URL + req.path;

    let config = {
      headers: {
        Authorization: process.env.API_TOKEN
      }
    }

    axios.get(requestURL, config)
      .then(result => {

        callback(result.data);
      })
      .catch(err => console.log(err));
  }
}
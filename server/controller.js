const axios = require('axios');
require('dotenv').config();
//refactor controllers and server with promise based
const config = {
  headers: {
    Authorization: process.env.API_TOKEN
  }
};

module.exports = {
  getProducts: (req, res, callback) => {

    let requestURL = process.env.API_URL + req.path;

    axios.get(requestURL, config)
      .then(result => {callback(result.data);})
      .catch(err => console.log(err));
  },

  getReviews: (req, res, callback) => {
    let requestURL = process.env.API_URL + req.url;

    axios.get(requestURL, config)
      .then(result => {callback(result.data);})
      .catch(err => console.log(err));
  },

  postReviews: (req, res, callback) => {
    //TODO HERE
    let requestURL = process.env.API_URL + req.url;
    //req.data(?)  Needed

    axios.post(requestURL, config)
      .then(result => {callback(result.data);})
      .catch(err => console.log(err));
  },

  putReviews: (req, res, callback) => {
    //TODO HERE
    let requestURL = process.env.API_URL + req.path;

    axios.put(requestURL, config)
      .then(result => {callback(result.data);})
      .catch(err => console.log(err));
  },

  getQA: (req, res, callback) => {
    let requestURL = process.env.API_URL + req.url;

    axios.get(requestURL, config)
      .then(result => {callback(result.data);})
      .catch(err => console.log(err));
  },

  getAnswers: (req, res, callback) => {
    //TODO HERE
    let requestURL = process.env.API_URL + req.path;

    axios.get(requestURL, config)
      .then(result => {callback(result.data);})
      .catch(err => console.log(err));
  },

  postQuestion: (req, res, callback) => {
    //TODO HERE
    let requestURL = process.env.API_URL + req.url;
    //req.data(?)  Needed

    axios.post(requestURL, config)
      .then(result => {callback(result.data);})
      .catch(err => console.log(err));
  },

  postAnswer: (req, res, callback) => {
    //TODO HERE
    let requestURL = process.env.API_URL + req.url;
    //req.data(?)  Needed

    axios.post(requestURL, config)
      .then(result => {callback(result.data);})
      .catch(err => console.log(err));
  },

  putAnswer: (req, res, callback) => {
    //TODO HERE
    let requestURL = process.env.API_URL + req.path;

    axios.put(requestURL, config)
      .then(result => {callback(result.data);})
      .catch(err => console.log(err));
  },

  putQuestion: (req, res, callback) => {
    //TODO HERE
    let requestURL = process.env.API_URL + req.path;

    axios.put(requestURL, config)
      .then(result => {callback(result.data);})
      .catch(err => console.log(err));
  },


}
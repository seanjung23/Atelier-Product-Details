const axios = require('axios');
require('dotenv').config();
//refactor controllers and server with promise based
const config = {
  headers: {
    Authorization: process.env.API_TOKEN
  }
};

module.exports = {
  getProducts: (req, res) => {

    let requestURL = process.env.API_URL + req.path;

    axios.get(requestURL, config)
      .then(result => {res.json(result.data);})
      .catch(err => console.log(err));
  },

  getReviews: (req, res) => {
    let requestURL = process.env.API_URL + req.url;

    axios.get(requestURL, config)
      .then(result => {res.json(result.data);})
      .catch(err => console.log(err));
  },

  postReviews: (req, res) => {
    let requestURL = process.env.API_URL + req.url;

    axios.post(requestURL, req.body, config)
      .then(result => {res.json(result.data);})
      .catch(err => console.log(err));
  },

  putReviews: (req, res) => {
    let requestURL = process.env.API_URL + req.path;

    axios.put(requestURL,
      {params: req.params},
      config)
      .then(result => {
        res.json(result.data);
      })
      .catch(err => console.log(err));
  },

  getQuestions: (req, res) => {
    let requestURL = process.env.API_URL + req.url;

    axios.get(requestURL, config)
      .then(result => {res.json(result.data);})
      .catch(err => console.log(err));
  },

  getAnswers: (req, res) => {
    let requestURL = process.env.API_URL + req.path;

    axios.get(requestURL, {
      headers: config.headers,
      params: req.query
    })
      .then(result => {res.json(result.data);})
      .catch(err => console.log(err));
  },

  postQuestion: (req, res) => {
    let requestURL = process.env.API_URL + req.url;

    axios.post(requestURL, req.body, config)
      .then(result => {
        res.status(result.status).json(result.data);
      })
      .catch(err => console.log(err));
  },

  postAnswer: (req, res) => {
    let requestURL = process.env.API_URL + req.url;

    axios.post(requestURL, req.body, config)
      .then(result => {
        res.status(result.status).json(result.data);
      })
      .catch(err => console.log(err));
  },

  putQuestion: (req, res) => {
    let requestURL = process.env.API_URL + req.path;

    axios.put(requestURL, req.body, config)
      .then(result => {
        res.status(result.status).json(result.data);
      })
      .catch(err => console.log(err));
  },

  putAnswer: (req, res) => {
    let requestURL = process.env.API_URL + req.path;

    axios.put(requestURL, req.body, config)
      .then(result => {
        console.log(result);
        // res.status(result.status).json(result.data);
      })
      .catch(err => console.log(err));
  },

  postCart: (req, res) => {
    let requestURL = process.env.API_URL + req.path;
    console.log(requestURL)
    console.log(req.body)
    axios.post(requestURL, req.body, config)
    .then(result => {res.json(result.data);})
      .catch(err => console.log(err));
  },

  getCart:(req, res) => {
    let requestURL = process.env.API_URL + req.path;

    axios.get(requestURL, config)
      .then(result => {res.json(result.data);})
      .catch(err => console.log(err));
  },
  postInteractions:(req, res) => {
    let requestURL = process.env.API_URL + req.path;
    axios.post(requestURL,req.body, config)
    .then(result => {
      console.log(result.data)
      res.json(result.data);})
    .catch(err => console.log(err));
  }

}
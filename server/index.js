const express = require('express');
const path = require('path');
require('dotenv').config();
const app = express();
const { getProducts, getReviews, getQA, postReviews, putReviews, getAnswers, postQuestion, postAnswer,  putAnswer, putQuestion} = require('./controller');

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

/* PRODUCTS */
app.get('/products/:id', (req, res) => {

    getProducts(req, res, (data) => {
      res.json(data);
    });

});

app.get('/products/:id/related', (req, res) => {

    getProducts(req, res, (data) => {
      res.json(data);
    });

});

/* REVIEWS */
app.get('/reviews/', (req, res) => {
  getReviews(req, res, (data) => {

    res.json(data);
  });
});

app.get('/reviews/meta', (req, res) => {
  getReviews(req, res, (data) => {

    res.json(data);
  });
});

app.post('/reviews', (req, res) => {
  postReviews(req, res, (data) => {

    res.json(data);
  });
});

app.put('/reviews/:review_id/helpful', (req, res) => {
  putReviews(req, res, (data) => {
    res.json(data);
  });
});

app.put('/reviews/:review_id/report', (req, res) => {
  putReviews(req, res, (data) => {
    res.json(data);
  });
});

/* QUESTIONS */
app.get('/qa/questions', (req, res) => {
  getQA(req, res, (data) => {

    res.json(data);
  });
});

app.get('/qa/questions/:question_id/answers', (req, res) => {
  getAnswers(req, res, (data) => {

    res.json(data);
  });
});

app.post('/qa/questions', (req, res) => {
  postQuestion(req, res, (data) => {

    res.json(data);
  });
});

app.post('/qa/questions/:question_id/answers', (req, res) => {
  postAnswer(req, res, (data) => {

    res.json(data);
  });
});

app.put('/qa/questions/:question_id/helpful', (req, res) => {
  putQuestion(req, res, (data) => {

    res.json(data);
  });
});

app.put('/qa/questions/:question_id/report', (req, res) => {
  putQuestion(req, res, (data) => {

    res.json(data);
  });
});

app.put('/qa/answers/:answer_id/helpful', (req, res) => {
  putAnswer(req, res, (data) => {

    res.json(data);
  });
});

app.put('/qa/answers/:answer_id/report', (req, res) => {
  putAnswer(req, res, (data) => {

    res.json(data);
  });
});



let port = process.env.SERVER_PORT;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
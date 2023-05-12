const express = require('express');
const path = require('path');
require('dotenv').config();
const app = express();
const { getProducts, getReviews, getQA, postReviews, putReviews, getAnswers, postQuestion, postAnswer,  putAnswer, putQuestion} = require('./controller');

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

/* PRODUCTS */
app.get('/products/:id', (req, res) => {

    getProducts(req, res);

});

app.get('/products/:id/related', (req, res) => {

    getProducts(req, res);

});

app.get('/products/:product_id/styles', (req, res) => {

  getProducts(req, res);

});

/* REVIEWS */
app.get('/reviews/', (req, res) => {
  getReviews(req, res);
});

app.get('/reviews/meta', (req, res) => {
  getReviews(req, res);
});

app.post('/reviews', (req, res) => {
  postReviews(req, res);
});

app.put('/reviews/:review_id/helpful', (req, res) => {
  putReviews(req, res);
});

app.put('/reviews/:review_id/report', (req, res) => {
  putReviews(req, res);
});

/* QUESTIONS */
app.get('/qa/questions', (req, res) => {
  getQA(req, res);
});

app.get('/qa/questions/:question_id/answers', (req, res) => {
  getAnswers(req, res);
});

app.post('/qa/questions', (req, res) => {
  postQuestion(req, res);
});

app.post('/qa/questions/:question_id/answers', (req, res) => {
  postAnswer(req, res);
});

app.put('/qa/questions/:question_id/helpful', (req, res) => {
  putQuestion(req, res);
});

app.put('/qa/questions/:question_id/report', (req, res) => {
  putQuestion(req, res);
});

app.put('/qa/answers/:answer_id/helpful', (req, res) => {
  putAnswer(req, res);
});

app.put('/qa/answers/:answer_id/report', (req, res) => {
  putAnswer(req, res);
});



let port = process.env.SERVER_PORT;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
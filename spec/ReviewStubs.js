let reviewInfo = [ {
  body :
  "Another testing sample.",
  date : "2021-04-23T00:00:00.000Z",
  helpfulness : 29,
  photos : [
    {0 : {id: 1122590, url: 'https://images.unsplash.com/photo-1534960680480-ca…cHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2384&q=80'}}
  ],
  rating : 1,
  recommend : false,
  response :
   "\"Expedita repellat quaerat debitis ab qui eos est voluptatibus.\"",
  review_id : 584640,
  reviewer_name : "Roselyn_West11",
  summary : "Mollitia nemo sunt."
},
{
  body :
  "Quis maiores et pariatur et reprehenderit quos neque distinctio et. Qui quo quo laborum eaque pariatur. Nostrum natus non ut fuga dolorem est corporis. Eum quisquam veritatis aspernatur voluptatum officia sed dolor rerum. Aut dolores natus ducimus totam magnam non ea facere ut. Officiis labore.",
  date : "2021-04-20T00:00:00.000Z",
  helpfulness : 29,
  photos : [
    {0 : {id: 1122590, url: 'https://images.unsplash.com/photo-1534960680480-ca…cHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2384&q=80'}}
  ],
  rating : 1,
  recommend : false,
  response :
   "\"Expedita repellat quaerat debitis ab qui eos est voluptatibus.\"",
  review_id : 584644,
  reviewer_name : "Joseph_West11",
  summary : "Mollitia nemo sunt."
},
{
  body :
  "I really enjoed these. Cause I can, and not because I can't",
  date : "2021-04-20T00:00:00.000Z",
  helpfulness : 11,
  photos : [
    {0 : {id: 1122590, url: 'https://images.unsplash.com/photo-1534960680480-ca…cHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2384&q=80'}}
  ],
  rating : 5,
  recommend : true,
  response :
   "\"Thank you for the feedback\"",
  review_id : 584620,
  reviewer_name : "Adam Wee",
  summary : "Shame."
}
]

let reviewMetaData = {
  characteristics : {
    Comfort : {id: 125080, value: '2.5833333333333333'},
    Fit : {id: 125078, value: '3.1666666666666667'},
    Length : {id: 125079, value: '2.9000000000000000'},
    Quality : {id: 125081, value: '3.6363636363636364'}
  },
  product_id : "37325",
  ratings : {1: '4', 3: '4', 4: '1', 5: '7'},
  recommended : {false: '9', true: '7'}
}

let productInfo = {
  campus : "hr-rfe",
  category : "Pants",
  created_at : "2021-08-13T14:37:33.285Z",
  default_price : "120.00",
  description :
  "Blanditiis est aliquam architecto quia. Saepe quis eum. Officiis nihil est.",
  features : [{
    0 : {feature: 'Frame', value: '"AllLight Composition Resin"'}
  }],
  id : 37325,
  name : "Lela Pants",
  slogan :
  "Voluptatum eveniet aliquam magni ratione repudiandae praesentium.",
  updated_at : "2021-08-13T14:37:33.285Z"
}

module.exports.reviewInfo = reviewInfo;
module.exports.reviewMetaData = reviewMetaData;
module.exports.productInfo = productInfo;
const express = require('express')
const router = new express.Router()
const API = 'AIzaSyDDi6gofGP9iTwxvr9FEeBxbfQ9GcWVMMg'
var search = require('youtube-search');

router.get('/Videoid', (req, res, next) => {

  if (!req.query.search) {
    return res.send({
      error: 'you must provide search item'
    })
  }
  console.log(req.query.search)
  // var search = require('youtube-search');

  let Search_Videos

  var opts = {
    maxResults: 20,
    key: API
  };

  search(req.query.search, opts, function (err, results) {
    if (err) return console.log(err);

    // console.log(results);
    Search_Videos = results;
    res.send(
      Search_Videos
    )
  });


})
//const API = process.env.YouTube_API_KEY



module.exports = router
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongo = require("mongojs")
var app = express();
app.use(bodyParser.json());


var db = mongo("Birds-1800")

var sightingsColl = db.collection("sightings")


var port = 3000;

app.post('/api/sighting', function(req, res) {
  sightingsColl.insert(req.body, function(err, s){
  res.send(s);

  })
  console.log('POST sighting');
  // res.end();
});

app.get('/api/sighting', function(req, res) {
  sightingsColl.find({status: req.query.status}, function(err, sightings){
    res.send(sightings);
  })
  // console.log('GET sighting');
  // res.end();
});

app.delete('/api/sighting', function(req, res) {
  console.log('DELETE sighting');
  res.end();
});

app.put('/api/sighting', function(req, res) {
  console.log('PUT sighting');
  res.end();
});

app.listen(port, function() {
  console.log("Started server on port", port);
});

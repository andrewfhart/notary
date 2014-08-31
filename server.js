var express = require('express');
var bodyParser = require('body-parser');
var app = express();

/* Sample data */

var notes = [{title: 'Test Note', text: 'Oh my _goodness_! It\s __ALIVE__!'}];

/* Static content */

app.use('/', express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



/* API */

app.post('/note/new', function(req,res) {
  res.setHeader('Content-Type', 'application/json');
  notes.push(req.body);
  res.send(JSON.stringify(notes[notes.length -1]));
});

app.get('/note/:id', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  if (notes[req.params.id]) {
    res.send(JSON.stringify(notes[req.params.id]));
  } else {
    res.status(404).end();
  }
});

app.put('/note/:id', function(req, res) {
  var noteId = req.params.id;
  notes[noteId] = req.body;
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(notes[noteId]));
});


/* Start the app */

app.listen(3000);

console.log('Server started: http://localhost:3000/');

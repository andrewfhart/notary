var express = require('express');
var bodyParser = require('body-parser');
var app = express();

/* Sample data */

/**
 * This data structure is used as a mock to test API integration with
 * the front end. Changes will not persist across server restarts. There are
 * also several serious issues with this approach (not least of which
 * is the potential for ID reuse after note deletion) that prevent it's
 * practical use beyond testing.
 **/
var notes = [{title: 'Test Note', body: 'Oh my _goodness_! It\s __ALIVE__!'}];

/* Static content */

app.use('/', express.static(__dirname + '/../client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



/* API */

// Add a new note to the collection
app.post('/note/new', function(req,res) {
  res.setHeader('Content-Type', 'application/json');
  notes.push(req.body);
  res.send(JSON.stringify(notes[notes.length -1]));
});

// Retrieve the specified note from the collection
app.get('/note/:id', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  if (notes[req.params.id]) {
    res.send(JSON.stringify(notes[req.params.id]));
  } else {
    res.status(404).end();
  }
});

// Save changes to the specified note
app.put('/note/:id', function(req, res) {
  var noteId = req.params.id;
  notes[noteId] = req.body;
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(notes[noteId]));
});


/* Start the app */

app.listen(3000);

console.log('Server started: http://localhost:3000/');

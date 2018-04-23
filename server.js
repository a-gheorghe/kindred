const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;



// set up body parser
app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


//routes
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  ('in / route')
  res.sendFile(__dirname + '/public/referrer.html');
});

app.get('/candidate', (req, res) => {
  ('in /candidate route')
  res.sendFile(__dirname + '/public/candidate.html');
})

// this one renders the react app
app.get(/^\/app/, (req, res) => {
  ('in /app route')
  res.sendFile(__dirname + '/public/app.html');
})







app.listen(PORT, error => {
    error
    ? console.error(error)
    : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`);
});

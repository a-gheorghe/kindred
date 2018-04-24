const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const multer = require('multer');
const uuidv4 = require('uuid/v4');
const aws = require('aws-sdk');
const multerS3 = require('multer-s3');


const PORT = process.env.PORT || 3000;



//routes
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

aws.config.update({
    secretAccessKey: process.env.S3_SECRET,
    accessKeyId: process.env.S3_ACCESS_KEY_ID,
    region: 'us-west-1'
});

s3 = new aws.S3();

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'kindred-testing-ana',
        key: (req, file, cb) => {
            const newFilename = `${uuidv4()}${path.extname(file.originalname)}`
            cb(null, newFilename)
        }
    })
});

// post
app.post('/projectphotos', upload.array('project-photos'), (req, res) => {
  console.log('successfully uploaded photos to S3', req.files)

  // here now we can take the urls and save them to the postgreSQL database for the particular user
  req.files.forEach((file) => console.log('file location is: ', file.location))
  // req.files.location
  res.send();
});

app.post('/profilephoto', upload.single('profile-photo'), (req, res) => {
  console.log('successfully uploaded profile photo to S3', req)
  res.send()
})






app.get('/', (req, res) => {
  console.log('in / route')
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

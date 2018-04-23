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


// configure storage
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, './uploads');
//   },
//   filename: (req, file, cb) => {
//     const newFilename = `${uuidv4()}${path.extname(file.originalname)}`;
//     cb(null, newFilename);
//   },
// });

// create the multer instance that will be used to upload/save the file
// const upload = multer({ storage });


// TEST STARTS HERE

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
// TEST ENDS HERE







// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.post('/photo', upload.array('fileArray'), (req, res) => {
  console.log('in here')
  console.log('req is ', req)
  /*
    We now have a new req.file object here. At this point the file has been saved
    and the req.file.filename value will be the name returned by the
    filename() function defined in the diskStorage configuration. Other form fields
    are available here in req.body.
  */
  res.send();
});




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

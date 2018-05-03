const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const LocalStrategy = require('passport-local');

const app = express();
const bcrypt = require('bcrypt');
const path = require('path');
const multer = require('multer');
const uuidv4 = require('uuid/v4');
const aws = require('aws-sdk');
const multerS3 = require('multer-s3');
const routes = require('./backend/routes');
const admin = require('./backend/admin');
const auth = require('./backend/auth');
const {
  Candidate,
  Referrer,
  Admin,
} = require('./database/models');

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: process.env.SECRET,
}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  let userType;
  if ('approval_status' in user) {
    userType = 'candidate';
  } else if ('company' in user) {
    userType = 'referrer';
  } else {
    userType = 'admin';
  }
  done(null, { userType, id: user.id });
});

passport.deserializeUser((userObj, done) => {
  // figure out how to differentiate between Candidate and Referrer for passport
  if (userObj.userType === "candidate") {
    Candidate.findById(userObj.id)
      .then(user => {
        if (user) {
          user.userType = userObj.userType;
          return done(null, user);
        }
      })
      .catch(err => done(err, null));
  } else if (userObj.userType === "admin") {
    Admin.findById(userObj.id)
      .then(user => {
        if (user) {
          user.userType = userObj.userType;
          return done(null, user);
        }
      })
      .catch(err => done(err, null));
  } else {
    Referrer.findById(userObj.id)
      .then(user => {
        if (user) {
          user.userType = userObj.userType;
          return done(null, user);
        }
      })
      .catch(err => done(err, null));
  }
});

passport.use('candidate-local', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
}, (email, password, done) => {
  console.log('inside local stratedy')
  Candidate.findOne({
    where: {
      email: email,
    }
  }).then((candidate) => {
    console.log('HELLO', candidate);
    if (candidate) {
      bcrypt.compare(password, candidate.password, (err, res) => {
        if (res) {
          return done(null, candidate);
        } else {
          return done(null, false);
        }
      });
    } else {
      return done(null, false);
    }
  })
  .catch(err => {
    if (err) {
      return done(err, false, {
        message: 'This email or password is incorrect.',
      });
    }
  });
}));

passport.use('referrer-local', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
}, (email, password, done) => {
  Referrer.findOne({
    where: {
      email: email,
    }
  }).then((referrer) => {
    if (referrer) {
      bcrypt.compare(password, referrer.password, (err, res) =>
        ((res) ? done(null, referrer) : done(null, false))
      );
    } else {
      console.log("User not found.");
      return done(null, false);
    }
  })
  .catch(err => {
    if (err) {
      console.log("Password or email address is incorrect");
      return done(err, false, {
        message: 'This email or password is incorrect.',
      });
    }
  });
}));

passport.use('admin-local', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
}, (email, password, done) => {
  Admin.findOne({
    where: {
      email: email,
    }
  }).then((admin) => {
    if (admin) {
      bcrypt.compare(password, admin.password, (err, res) =>
        (res) ? done(null, admin) : done(null, false)
      );
    } else {
      return done(null, false);
    }
  })
  .catch(err => {
    if (err) {
      return done(err, false, {
        message: 'This email or password is incorrect.',
      });
    }
  });
}));



//routes

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

// post project photos
// app.post('/projectphotos', upload.array('project-photos'), (req, res) => {
//   console.log('successfully uploaded photos to S3', req.files)
//
//   // here now we can take the urls and save them to the postgreSQL database for the particular user
//   req.files.forEach((file) => console.log('file location is: ', file.location))
//   // req.files.location
//   res.send();
// });

app.post('/upload', upload.array('documents'), (req, res) => {
  console.log('successfully documents to S3', req.files)
  let candDocs = {}
  for (let i = 0; i < req.files.length; i++) {
    if (req.files[i].mimetype === 'application/pdf'){
      candDocs.resume = req.files[i].location
    } else {
      candDocs.profilePic = req.files[i].location
    }
  }
  // here now we can take the urls and save them to the postgreSQL database for the particular user
  // if file.mimetype === 'application/pdf', this is the resume
  // if file.mimetime === 'image/jpeg', this is the profile picture

  //   req.files.forEach((file) => console.log('file location is: ', file.location))
  res.status(200).json({message: 'Here are the cand docs', docs: candDocs})
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/referrer.html');
});

app.get('/candidate', (req, res) => {
  ('in /candidate route')
  res.sendFile(__dirname + '/public/candidate.html');
});

// this one renders the react app
app.get(/^\/app/, (req, res) => {
  ('in /app route')
  res.sendFile(__dirname + '/public/app.html');
});


app.use('/', auth(passport));

app.use((req, res, next) => {
  console.log('req.user', req.session);
  if(!req.user) {
    res.redirect('/app/login');
  } else {
    next();
  }
});

app.use('/', admin);
app.use('/', routes);

app.listen(PORT, error => {
    error
    ? console.error(error)
    : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`);
});

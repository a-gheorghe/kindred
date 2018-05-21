const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const LocalStrategy = require('passport-local');

const app = express();
const server = require('http').Server(app);
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
const io = require('socket.io')(server);

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
  if (userObj.userType === 'candidate') {
    Candidate.findById(userObj.id)
      .then((user) => {
        if (user) {
          user.dataValues.userType = userObj.userType;
          return done(null, user);
        }
        return done(new Error('could not find user', null));
      })
      .catch(err => done(err, null));
  } else if (userObj.userType === 'admin') {
    Admin.findById(userObj.id)
      .then((user) => {
        if (user) {
          user.dataValues.userType = userObj.userType;
          return done(null, user);
        }
        return done(new Error('could not find user', null));
      })
      .catch(err => done(err, null));
  } else {
    Referrer.findById(userObj.id)
      .then((user) => {
        if (user) {
          user.dataValues.userType = userObj.userType;
          return done(null, user);
        }
        return done(new Error('could not find user', null));
      })
      .catch(err => done(err, null));
  }
});

passport.use('candidate-local', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
}, (email, password, done) => {
  console.log('inside local strategy');
  Candidate.findOne({
    where: {
      email
    }
  })
    .then((candidate) => {
      console.log('HELLO', candidate);
      if (candidate) {
        bcrypt.compare(password, candidate.password, (err, res) => {
          if (res) done(null, candidate);
          else done(null, false);
        });
      } else {
        done(null, false);
      }
    })
    .catch(err => done(err, false, {
      message: 'This email or password is incorrect.',
    }));
}));

passport.use('referrer-local', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
}, (email, password, done) => {
  Referrer.findOne({
    where: {
      email,
    }
  })
    .then((referrer) => {
      if (referrer) {
        bcrypt.compare(password, referrer.password, (err, res) =>
          ((res) ? done(null, referrer) : done(null, false)));
      } else {
        console.log('User not found.');
        done(null, false);
      }
    })
    .catch((err) => {
      console.log('Password or email address is incorrect');
      return done(err, false, { message: 'This email or password is incorrect.' });
    });
}));

passport.use('admin-local', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
}, (email, password, done) => {
  Admin.findOne({
    where: {
      email,
    }
  })
    .then((adminUser) => {
      if (adminUser) {
        bcrypt.compare(password, adminUser.password, (err, res) =>
          ((res) ? done(null, adminUser) : done(null, false)));
      } else {
        done(null, false);
      }
    })
    .catch(err => done(err, false, {
      message: 'This email or password is incorrect.',
    }));
}));

// routes

aws.config.update({
  secretAccessKey: process.env.S3_SECRET,
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  region: 'us-west-1',
});

const s3 = new aws.S3();

const upload = multer({
  storage: multerS3({
    s3,
    bucket: 'kindred-testing-ana',
    acl: 'public-read',
    key: (req, file, cb) => {
      const newFilename = `${uuidv4()}${path.extname(file.originalname)}`;
      cb(null, newFilename);
    }
  })
});

// post project photos
// app.post('/projectphotos', upload.array('project-photos'), (req, res) => {
//   console.log('successfully uploaded photos to S3', req.files)
//
//   // here now we can take the urls and save them to the postgreSQL database
//   // for the particular user
//   req.files.forEach((file) => console.log('file location is: ', file.location))
//   // req.files.location
//   res.send();
// });

app.post('/upload', upload.array('documents'), (req, res) => {
  console.log('successfully documents to S3', req.files);
  const candDocs = {};
  for (let i = 0; i < req.files.length; i++) {
    if (req.files[i].mimetype === 'application/pdf') {
      candDocs.resume = req.files[i].location;
    } else {
      candDocs.profilePic = req.files[i].location;
    }
  }
  // here now we can take the urls and save them to the postgreSQL database for the particular user
  // if file.mimetype === 'application/pdf', this is the resume
  // if file.mimetime === 'image/jpeg', this is the profile picture

  //   req.files.forEach((file) => console.log('file location is: ', file.location))
  res.status(200).json({ message: 'Here are the cand docs', docs: candDocs });
});

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/referrer.html`);
});

app.get('/candidate', (req, res) => {
  ('in /candidate route');

  res.sendFile(`${__dirname}/public/candidate.html`);
});

// this one renders the react app
app.get(/^\/app/, (req, res) => {
  ('in /app route');

  res.sendFile(`${__dirname}/public/app.html`);
});


app.use('/', auth(passport));

app.use((req, res, next) => {
  console.log('req.user', req.session);
  if (!req.user) {
    res.redirect('/app/login');
  } else {
    next();
  }
});

app.use('/', admin);
app.use('/', routes);

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('login', (message) => {

  });
  socket.on('message', (message) => {
    console.log('Got message', message);
  });
});

server.listen(PORT, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info(`==> 🌎 Listening on port ${PORT}. ` +
      `Visit http://localhost:${PORT}/ in your browser.`);
  }
});

// Socket handler
io.on('connection', (socket) => {
  socket.on('username', (username) => {
    if (!username || !username.trim()) return socket.emit('errorMessage', 'No username!');
    socket.username = String(username);
    return socket.username;
  });

  socket.on('room', (requestedRoom) => {
    if (!socket.username) {
      return socket.emit('errorMessage', 'Username not set!');
    }
    if (!requestedRoom) {
      return socket.emit('errorMessage', 'No room!');
    }
    if (socket.room) socket.leave(socket.room);
    socket.room = requestedRoom;

    const timeStamp = new Date();

    return socket.join(requestedRoom, () => {
      socket.to(requestedRoom).emit('message', {
        timeStamp,
        user: 'KindredTalent',
        content: `${socket.username} has joined`,
      });
    });
  });

  socket.on('edit', editData => socket.to(editData.roomName).emit('edit', editData));

  socket.on('message', (message) => {
    if (!socket.room) {
      return socket.emit('errorMessage', 'No rooms joined!');
    }

    return socket.to(socket.room).emit('message', {
      timeStamp: message.timeStamp,
      user: socket.username,
      content: message.content
    });
  });
});

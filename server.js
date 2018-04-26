const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const app = express();
const routes = require('./backend/routes');
const admin = require('./backend/admin');
const auth = require('./backend/auth');
const { Candidate, Referrer, Admin } = require('./database/models');
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(passport.initialize());
app.use(passport.session());

isCand = function(user) {
  return user.hasOwnProperty('approval_status');
}
isRef = function(user){
  return user.hasOwnProperty('company');
}

passport.serializeUser((user, done) => {
  let userType;
  if (isCand(user)) {
    userType = "candidate";
  } else if(isRef(user)) {
    userType = "referrer"
  }else{
    userType = "admin"
  }
  done(null, {'userType': userType, 'id': user.id});
});

passport.deserializeUser((obj, done) => {
  let userObj = JSON.parse(obj);
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
}, function(email, password, done) {
  Candidate.findOne({
    where: {
      email: email,
      password: password
    }
  }).then((candidate) => {
    return done(null, candidate);
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
}, function(email, password, done) {
  Referrer.findOne({
    where: {
      email: email,
    }
  }).then((referrer) => {
    return done(null, referrer);
  })
  .catch(err => {
    if (err) {
      return done(err, false, {
        message: 'This email or password is incorrect.',
      });
    }
  });
}));

passport.use('admin-local', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
}, function(email, password, done) {
  Admin.findOne({
    where: {
      email: email,
      password: password
    }
  }).then((admin) => {
    return done(null, admin);
  })
  .catch(err => {
    if (err) {
      return done(err, false, {
        message: 'This email or password is incorrect.',
      });
    }
  });
}));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
  response.sendFile(`${__dirname}/public/index.html`); // For React/Redux
});

app.use('/', auth(passport));
app.use('/', admin);
app.use('/', routes);

app.listen(PORT, error => {
    error
    ? console.error(error)
    : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`);
});

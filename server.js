const path = require('path');
const express = require('express');
const app = express();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const auth = require('./backend/auth');
const { User } = require('./backend/models')

// const sequelize = new Sequelize('database', 'username', 'password', {
//   host: 'localhost',
//   dialect: // pick one of 'mysql','sqlite','postgres','mssql',
// });


//set up database
const Sequelize = require('sequelize');
var sequelize;

sequelize = new Sequelize(process.env.DEV_DATABASE_URL, {
  host: 'localhost',
  dialect: 'postgres'
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// set up body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// Passport initialization
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  console.log('in serialize user')
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  console.log('in deserialize user')
  User.findById(id).then(user => done(null, user)).catch(e => console.log(e));
});

passport.use(new LocalStrategy((username, password, done) => {
  console.log('inside Local Strategy')
  User.findOne({ where: { username } }).then(user => {
    if (!user) done(null, false);
    else if (user.password === password) done(null, user);
    else done(null, false);
  }).catch(e => {
    console.log(e)
    done(e)
  });
}));

//routes
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html'); // For React/Redux
});

// app.post('/api/login', (req, res) => {
//   console.log('yo yo waddup?')
// })

app.post('/api/login', passport.authenticate('local'), (req,res) => {
  console.log('in here')
  if (req.user) res.send(true);
  else res.status(401).send('Incorrect username/pass combo');
});
// app.use('/api', auth)

app.listen(PORT, error => {
    error
    ? console.error(error)
    : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`);
});

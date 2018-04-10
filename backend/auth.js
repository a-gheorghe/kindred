const express = require('express');
const router = express.Router();

// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy
//
// // Passport initialization
//
// router.use(passport.initialize());
// router.use(passport.session());
//
// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });
//
// passport.deserializeUser((id, done) => {
//   console.log('in deserialize user')
//   User.findById(id).then(user => done(null, user)).catch(e => console.log(e));
// });
//
// passport.use(new LocalStrategy((username, password, done) => {
//   console.log('inside Local Strategy')
//   User.findOne({ where: { username } }).then(user => {
//     if (!user) done(null, false);
//     else if (user.password === password) done(null, user);
//     else done(null, false);
//   }).catch(e => {
//     console.log(e)
//     done(e)
//   });
// }));

//Login routes go here
router.get('/isLoggedIn', (req,res) => {
  if (req.user) res.send(true);
  else res.send (false)
})

// router.post('/login', (req, res) => {
//   console.log('i am in here')
// })

// router.post('/login', passport.authenticate('local'), (req,res) => {
//   console.log('in here')
//   if (req.user) res.send(true);
//   else res.status(401).send('Incorrect username/pass combo');
// });

router.get('/logout', function(req, res) {
  req.logout();
  res.send(true);
});

module.exports = router;

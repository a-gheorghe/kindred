// Add Passport-related auth routes here.
var express = require('express');
var router = express.Router();
var { Candidate, Referrer } = require('../database/models');

module.exports = function(passport) {
  // POSTS a new candidate to the database
  // router.post('/registerCandidate', (req, res) => {
  //   // validation step
  //   Candidate.create({
  //     first_name: req.body.first_name,
  //     last_name: req.body.last_name,
  //     email: req.body.email,
  //     password: req.body.password,
  //     picture_url: req.body.picture_url,
  //     location: req.body.location,
  //     linkedin_url: req.body.linkedin_url,
  //     github_url: req.body.github_url,
  //     website_url: req.body.website_url,
  //     resume_url: req.body.resume_url,
  //   })
  //     .then(() => res.send('candidate successfully added to database'))
  //     .catch(err => console.error(err));
  // });

  // POSTS a new referrer to the database
  router.post('/registerReferrer', (req, res) => {
    Referrer.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      picture_url: req.body.picture_url,
      location: req.body.location,
      linkedin_url: req.body.linkedin_url,
      github_url: req.body.github_url,
      website_url: req.body.website_url,
    })
      .then(() => res.send('referrer successfully added to database'))
      .catch(err => console.error(err));
  });

  // POST Login page by Jay
  // router.post('/candidate/login', function(req, res, next) {
  //    passport.authenticate('candidate-local', function(err, candidate, info) {
  //      if (err || !candidate) {
  //        // did not successfully authenticate
  //        res.send(401);
  //      } else {
  //        // successfully authenticate
  //        console.log('this is req', Object.keys(req));
  //        res.json({
  //          success: true,
  //          user: req.user,
  //        });
  //      }
  //    })(req, res, next)
  // });

  router.post('/candidate/login', (req, res, next) => {
    passport.authenticate('candidate-local', {
      successRedirect: '/app/cand/selfprofile',
      failureRedirect: '/app/login',
    })
  });

  router.post('/referrer/login', (req, res, next) => {
    passport.authenticate('referrer-local', {
      successRedirect: '/app/ref/messages',
      failureRedirect: '/app/login',
    })
  });

  // GET Logout page
  router.get('/logout', function(req, res) {
    req.logout();
    res.send('logout successful!')
  });

  // POST Login page for Admins
  // Check passport('local') -> ??
  router.post('/admins/login', function(req, res, next){
    passport.authenticate('admin-local', function(err, admin, info) {
      console.log(err, admin, info)
      if (err) {
        // did not successfully authenticate
        res.send(401);
      } else if (!admin) {
        // did not successfully authenticate
        res.send(401);
      } else {
        // successfully authenticate
        res.json({
          success: true,
          user: req.user,
        });
      }

    })(req, res, next)
  });

  // POST Logout page
  router.post('/admins/logout', function(req, res) {
    req.logout();
    res.send('logout successful!')
  });

  return router;
};

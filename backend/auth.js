// Add Passport-related auth routes here.
const express = require('express');

const router = express.Router();

const {
  createCandidate,
  createEducation,
  createProject,
  createReferrer,
  createSkill,
  createWorkExperience
} = require('./resources');

module.exports = function (passport) {
  router.post('/candidate/login', passport.authenticate('candidate-local', {
    successRedirect: '/candidate/success',
    failureRedirect: '/candidate/failure',
  }));

  router.get('/candidate/success', (req, res) => {
    res.status(200).json({ success: true });
  });

  router.get('/candidate/failure', (req, res) => {
    res.status(200).json({ success: false });
  });

  router.post('/referrer/login', passport.authenticate('referrer-local', {
    successRedirect: '/referrer/success',
    failureRedirect: '/referrer/failure',
  }));

  router.get('/referrer/success', (req, res) => {
    res.status(200).json({ success: true });
  });

  router.get('/referrer/failure', (req, res) => {
    res.status(200).json({ success: false });
  });

  // Check to see if a user is logged in as a referrer or candidate
  router.get('/checkAuth', (req, res) => {
    res.status(200).json({ user: req.user });
  });

  // GET Logout page
  router.get('/logout', (req, res) => {
    req.logout();
    res.status(200).json({ success: true });
  });

  // POST Login page for Admins
  // Check passport('local') -> ??
  router.post('/admins/login', (req, res, next) => {
    passport.authenticate('admin-local', (err, admin, info) => {
      console.log(err, admin, info);
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
    })(req, res, next);
  });

  // POST Logout page
  router.post('/admins/logout', (req, res) => {
    req.logout();
    res.send('logout successful!');
  });

  // adds a new candidate into the database
  // Route is tested
  router.post('/register-candidate', (req, res) => {
    console.log('registering candidate for post route, req is', req.body.skillArr[0]);
    const skillTest = req.body.skillArr.map(skill => skill.skill);
    console.log('skill test is ', skillTest);
    const promiseArr = [];
    createCandidate(req.body.basic)
      .then((cand) => {
        for (let i = 0; i < req.body.eduArr.length; i++) {
          promiseArr.push(createEducation(cand.id, req.body.eduArr[i]));
        }
        for (let l = 0; l < req.body.projArr.length; l++) {
          promiseArr.push(createProject(cand.id, req.body.projArr[l]));
        }
        for (let k = 0; k < skillTest.length; k++) {
          promiseArr.push(createSkill(cand.id, skillTest[k]));
        }
        for (let j = 0; j < req.body.workArr.length; j++) {
          promiseArr.push(createWorkExperience(cand.id, req.body.workArr[j]));
        }
        return Promise.all(promiseArr);
      })
      .then(resp => res.json(resp))
      .catch(err => console.error(err));
  });

  router.post('/register-referrer', (req, res) => {
    createReferrer(req.body)
      .then(resp => res.json(resp))
      .catch((err) => {
        console.error(err);
      });
  });

  return router;
};

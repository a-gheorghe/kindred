// Add Passport-related auth routes here.
const express = require('express');

const router = express.Router();
const {
  createCandidate, createEducation, createProject, createReferrer, createSkill, createWorkExperience,
} = require('./resources');

module.exports = function (passport) {
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
  // router.post('/registerReferrer', (req, res) => {
  //   Referrer.create({
  //     first_name: req.body.first_name,
  //     last_name: req.body.last_name,
  //     email: req.body.email,
  //     picture_url: req.body.picture_url,
  //     location: req.body.location,
  //     linkedin_url: req.body.linkedin_url,
  //     github_url: req.body.github_url,
  //     website_url: req.body.website_url,
  //   })
  //     .then(() => res.send('referrer successfully added to database'))
  //     .catch(err => console.error(err));
  // });

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

  // router.post('/candidate/login', (req, res, next) => {
  //   console.log('hit with req', req);
  //   passport.authenticate('candidate-local', {
  //     successRedirect: '/app/cand/selfprofile',
  //     failureRedirect: '/app/',
  //   })
  // });

  router.post('/referrer/login', (req, res, next) => {
    passport.authenticate('referrer-local', {
      successRedirect: '/app/ref/messages',
      failureRedirect: '/app/login',
    });
  });

  // GET Logout page
  router.get('/logout', (req, res) => {
    req.logout();
    res.send('logout successful!');
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
    const promiseArr = [];
    createCandidate(req.body.basic)
      .then((cand) => {
        for (let i = 0; i < req.body.eduArr.length; i++) {
          promiseArr.push(createEducation(cand.id, req.body.eduArr[i]));
        }
        for (let l = 0; l < req.body.projArr.length; l++) {
          promiseArr.push(createProject(cand.id, req.body.projArr[l]));
        }
        for (let k = 0; k < req.body.skillArr.length; k++) {
          promiseArr.push(createSkill(cand.id, req.body.skillArr[k]));
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
      .catch(err => console.error(err));
  });

  return router;
};

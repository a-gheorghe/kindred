const express = require('express');

const router = express.Router();
const {
  createCandidate,
  createEducation,
  createProject,
  createReferrer,
  createSkill,
  createWorkExperience,
  deleteCandidate,
  deleteEducation,
  deleteProject,
  deleteReferrer,
  deleteSkill,
  deleteWorkExperience,
  getAllCandidateMessages,
  getAllCandidateMessageThreads,
  getAllCandidates,
  getAllEducation,
  getAllProjects,
  getAllReferrals,
  getAllReferrerMessages,
  getAllReferrerMessageThreads,
  getAllReferrers,
  getAllSkills,
  getAllWorkExperiences,
  getCandidate,
  getEducation,
  getProject,
  getReferrer,
  getSkill,
  getWorkExperience,
  updateCandidate,
  updateEducation,
  updateProject,
  updateReferrer,
  updateWorkExperience,
} = require('./resources');

const {
  Candidate,
  Education,
  Skill,
  WorkExperience,
} = require('../database/models');
const elasticsearch = require('elasticsearch');

const client = new elasticsearch.Client({
  host: 'https://eiftsb3217:nwp7p67ue0@kindredtalent-6472919482.us-west-2.bonsaisearch.net',
  log: 'trace'
});

client.indices.create({
  index: 'candidate-profile'
}, (err, resp, status) => {
  if (err) {
    console.log('INDEX ALREADY EXISTS IN ES IGNORE THIS ^');
  } else {
    console.log('index created', resp);
  }
});
// client.indices.delete({
//   index: 'candidate-profile'
// },function(err,resp,status) {
//   if(err) {
//     console.log(err);
//   }
//   else {
//     console.log("index created", resp);
//   }
// })


// returns all of the info about a candidate's profile that is displayed to users
router.get('/candidate/profile', (req, res) => {
  const promiseArr = [
    getCandidate(req.user.id),
    getAllEducation(req.user.id),
    getAllProjects(req.user.id),
    getAllSkills(req.user.id),
    getAllWorkExperiences(req.user.id),
  ];
  Promise.all(promiseArr)
    .then(([basic, education, projects, skills, workExperiences]) => {
      const candidateInfo = {};
      candidateInfo.basic = basic;
      candidateInfo.eduArr = education;
      candidateInfo.projectArr = projects;
      candidateInfo.skillArr = skills;
      candidateInfo.workArr = workExperiences;
      res.json(candidateInfo);
    })
    .catch(err => console.error(err));
});

// updates the candidate's basic profile information
router.put('/candidate/profile/basic', (req, res) => {
  Candidate.findById(req.user.id)
    .then(candObj => updateCandidate(candObj))
    .then(updated => res.json(updated))
    .catch(err => console.error(err));
});

// updates the candidate's specific education-related profile information
// only accounts for updating individually
router.put('/candidate/profile/education/:eduId', (req, res) => {
  Education.findById(req.params.eduId)
    .then(eduObj => updateEducation(eduObj))
    .then(updated => res.json(updated))
    .catch(err => console.error(err));
});

// updates the candidate's specific skill-related profile information
// How to serializeUser ?
router.delete('/candidate/profile/skills/:skillId', (req, res) => {
  Skill.findById(req.params.skillId)
    .then(skillObj => deleteSkill(req.user.id, skillObj))
    .then(updated => res.json(updated))
    .catch(err => console.error(err));
});

// updates the candidate's specific work-related profile information
// Needs to be changed to POST? No way to test the put since the updateWorkExperience
// function takes in a workObj that comes from the SQL query....
router.put('/candidate/profile/work-experiences/:workId', (req, res) => {
  WorkExperience.findById(req.params.workId)
    .then(workObj => updateWorkExperience(workObj))
    .then(updated => res.json(updated))
    .catch(err => console.error(err));
});

// adds a new candidate into the database
// Route is tested
router.post('/search', (req, res) => {
  console.log('this is req', req.body);
  client.search({
    index: 'candidate-profile',
    // CHANGE approval_status TO TRUE BELOW ONCE OUT OFF ALPHA
    q: `skill: ${req.body.search}`,
  }, (error, response) => {
    // UPDATE THIS ONCE FRONT-END PAGE IS BUILT
    res.send(response);
  });
});

router.delete('/delete/:id', (req, res) => {
  client.delete({
    index: 'profile',
    type: 'document',
    id: req.params.id,
  }, (error, response) => {
    res.send(response);
  });
});

router.post('/register-candidate', (req, res) => {
  console.log('REGISTERING A CANDIDATE', req.body.skillArr);
  const skillTest = req.body.skillArr.map(skill => (skill.skill));
  const promiseArr = [];
  createCandidate(req.body.basic)
    .then((cand) => {
      client.create({
        index: 'candidate-profile',
        type: 'document',
        id: cand.id,
        body: {
          first_name: req.body.basic.first_name,
          last_name: req.body.basic.last_name,
          email: req.body.basic.email,
          password: req.body.basic.password,
          picture_url: req.body.basic.picture_url,
          location: req.body.basic.location,
          linkedin_url: req.body.basic.linkedin_url,
          github_url: req.body.basic.github_url,
          website_url: req.body.basic.website_url,
          resume_url: req.body.basic.resume_url,
          title: req.body.basic.title,
          approval_status: false,
          education: req.body.eduArr,
          projects: req.body.projectArr,
          skill: skillTest,
          workExperience: req.body.workArr
        }
      }, (error, response) => {
        if (error) {
          console.log('something bad happened', error);
        } else {
          console.log(response);
        }
      });

      for (let i = 0; i < req.body.eduArr.length; i++) {
        promiseArr.push(createEducation(cand.id, req.body.eduArr[i]));
      }
      for (let l = 0; l < req.body.projectArr.length; l++) {
        promiseArr.push(createProject(cand.id, req.body.projectArr[l]));
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

module.exports = router;

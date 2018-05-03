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
} = require('./resources');

const {
  Candidate,
  Education,
  Skill,
  WorkExperience,
} = require('../database/models');


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

module.exports = router;

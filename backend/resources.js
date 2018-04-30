const {
  Candidate,
  Education,
  Message,
  MessageThread,
  Project,
  Referral,
  Referrer,
  Skill,
  WorkExperience,
} = require('../database/models');
const bcrypt = require('bcrypt');

// adds a new candidate
function createCandidate(candObj) {
  return bcrypt.hash(candObj.password, 10)
    .then(hash =>
      Candidate.create({
          first_name: candObj.first_name,
          last_name: candObj.last_name,
          email: candObj.email,
          password: hash,
          picture_url: candObj.picture_url,
          location: candObj.location,
          linkedin_url: candObj.linkedin_url,
          github_url: candObj.github_url,
          website_url: candObj.website_url,
          resume_url: candObj.resume_url,
          title: candObj.title,
          approval_status: false,
        })
    )
    .catch(err => console.error(err));
}

// adds a specific candidate’s education
function createEducation(candId, eduObj) {
  return Education.create({
    school_name: eduObj.school_name,
    degree: eduObj.degree,
    major: eduObj.major,
    graduation: eduObj.graduation,
    candidate_id: candId,
  })
    .catch(err => console.error(err));
}

// adds a specific candidate’s project
function createProject(candId, projObj) {
  return Project.create({
    start_date: projObj.start_date,
    end_date: projObj.end_date,
    current: projObj.current,
    title: projObj.title,
    link: projObj.link,
    description: projObj.description,
    candidate_id: candId,
  })
    .catch(err => console.error(err));
}

// adds a new referrer
function createReferrer(refObj) {
  return Referrer.create({
    first_name: refObj.first_name,
    last_name: refObj.last_name,
    company: refObj.company,
    title: refObj.title,
    email: refObj.email,
    password: refObj.password,
    picture_url: refObj.picture_url,
    linkedin_url: refObj.linkedin_url,
  })
    .catch(err => console.error(err));
}

// adds a specific candidate’s skill
/* @ANA: if a new object is created, there will be a boolean returned that's true,
so if it returns false, that means the skill is already on this candidate's
page and should throw back a message on the client side saying something like
"sorry, you already have this skill listed" */
function createSkill(candId, skillObj) {
  return Skill.findOrCreate({
    where: {
      candidate_id: candId,
    },
    defaults: {
      skill: skillObj.skill,
    },
  })
    .catch(err => console.error(err));
}

// adds a specific candidate’s work experience
function createWorkExperience(candId, workObj) {
  return WorkExperience.create({
    start_date: workObj.start_date,
    end_date: workObj.end_date,
    current: workObj.current,
    title: workObj.title,
    company: workObj.company,
    description: workObj.description,
    candidate_id: candId,
  })
    .catch(err => console.error(err));
}

// removes a specific candidate
function deleteCandidate(candId) {
  return Candidate.destroy({
    where: {
      id: candId,
    },
  })
    .catch(err => console.error(err));
}

// removes a specific candidate's specific education
function deleteEducation(candId, eduId) {
  return Education.destroy({
    where: {
      candidate_id: candId,
      id: eduId,
    },
  })
    .catch(err => console.error(err));
}

// removes a candidate's specific project
function deleteProject(candId, projId) {
  return Project.destroy({
    where: {
      candidate_id: candId,
      id: projId,
    },
  })
    .catch(err => console.error(err));
}

// removes a specific referrer
function deleteReferrer(refId) {
  return Referrer.destroy({
    where: {
      id: refId,
    }
  })
    .catch(err => console.error(err));
}

// removes a candidate's specific skill
function deleteSkill(candId, skillId) {
  return Skill.destroy({
    where: {
      candidate_id: candId,
      id: skillId,
    },
  })
    .catch(err => console.error(err));
}

// removes a candidate's specific work experience
function deleteWorkExperience(candId, workId) {
  return WorkExperience.destroy({
    where: {
      candidate_id: candId,
      id: workId,
    },
  })
    .catch(err => console.error(err));
}

// returns all of a specific candidate's specific message thread's messages
function getAllCandidateMessages(candId, threadId) {
  return Message.findAll({
    where: {
      candidate_id: candId,
      message_thread_id: threadId,
    },
  })
    .catch(err => console.error(err));
}

// returns all of a specific candidate's message threads
function getAllCandidateMessageThreads(candId) {
  return MessageThread.findAll({
    where: {
      candidate_id: candId,
    },
  })
    .catch(err => console.error(err));
}

// returns all candidates
function getAllCandidates() {
  return Candidate.findAll()
    .catch(err => console.error(err));
}

// returns all of a specific candidate's education
function getAllEducation(candId) {
  return Education.findAll({
    where: {
      candidate_id: candId,
    },
  })
    .catch(err => console.error(err));
}

// returns all of a specific candidate's projects
function getAllProjects(candId) {
  return Project.findAll({
    where: {
      candidate_id: candId,
    },
  })
    .catch(err => console.error(err));
}

// returns all of a specific candidate's referrals
function getAllReferrals(candId) {
  return Referral.findAll({
    where: {
      candidate_id: candId,
    },
  })
    .catch(err => console.error(err));
}

// returns all of a specific referrer's specific message thread's messages
function getAllReferrerMessages(refId, threadId) {
  return Message.findAll({
    where: {
      referrer_id: refId,
      message_thread_id: threadId,
    },
  })
    .catch(err => console.error(err));
}

// returns all of a specific referrer's message threads
function getAllReferrerMessageThreads(refId) {
  return MessageThread.findAll({
    where: {
      referrer_id: refId,
    },
  })
    .catch(err => console.error(err));
}

// returns all referrers
function getAllReferrers() {
  return Referrer.findAll()
    .catch(err => console.error(err));
}

// returns all of a specific candidate's skills
function getAllSkills(candId) {
  return Skill.findAll({
    where: {
      candidate_id: candId,
    },
  })
    .catch(err => console.error(err));
}

// returns all of a specific candidate's work experiences
function getAllWorkExperiences(candId) {
  return WorkExperience.findAll({
    where: {
      candidate_id: candId,
    },
  })
    .catch(err => console.error(err));
}

// returns a specific candidate
function getCandidate(candId) {
  return Candidate.findById(candId)
    .catch(err => console.error(err));
}

// returns a specific candidate’s specific education
function getEducation(candId, eduId) {
  return Education.findOne({
    where: {
      candidate_id: candId,
      id: eduId,
    },
  })
    .catch(err => console.error(err));
}

// returns a specific candidate’s specific project
function getProject(candId, projId) {
  return Project.findOne({
    where: {
      candidate_id: candId,
      id: projId,
    },
  })
    .catch(err => console.error(err));
}

// returns a specific referrer
function getReferrer(refId) {
  return Referrer.findById(refId)
    .catch(err => console.error(err));
}

// returns a specific candidate’s specific project
function getSkill(candId, skillId) {
  return Skill.findOne({
    where: {
      candidate_id: candId,
      id: skillId,
    },
  })
    .catch(err => console.error(err));
}

// returns a specific candidate’s specific work experience
function getWorkExperience(candId, workId) {
  return WorkExperience.findOne({
    where: {
      candidate_id: candId,
      id: workId,
    },
  })
    .catch(err => console.error(err));
}

// updates a candidate
function updateCandidate(candObj) {
  return Candidate.findById(candObj.id)
    .then(cand =>
      cand.update({
        first_name: candObj.first_name || cand.first_name,
        last_name: candObj.last_name || cand.last_name,
        email: candObj.email || cand.email,
        picture_url: candObj.picture_url || cand.picture_url,
        location: candObj.location || cand.location,
        linkedin_url: candObj.linkedin_url || cand.linkedin_url,
        github_url: candObj.github_url || cand.github_url,
        website_url: candObj.website_url || cand.website_url,
      })
    )
    .catch(err => console.error(err));
}

// updates a specific candidate's specific education
function updateEducation(eduObj) {
  return Education.findOne({
    where: {
      candidate_id: eduObj.candidate_id,
      id: eduObj.id,
    },
  })
    .then(edu =>
      edu.update({
        school_name: eduObj.school_name || edu.school_name,
        degree: eduObj.degree || edu.degree,
        major: eduObj.major || edu.major,
        candidate: eduObj.candidate || edu.candidate,
      })
    )
    .catch(err => console.error(err));
}

// updates a specific candidate's specific project from our database
function updateProject(projObj) {
  return Project.findOne({
    where: {
      candidate_id: projObj.candidate_id,
      id: projObj.id,
    },
  })
    .then(proj =>
      proj.update({
        start_date: projObj.start_date || proj.start_date,
        end_date: projObj.end_date || proj.end_date,
        current: projObj.current || proj.current,
        title: projObj.title || proj.title,
        link: projObj.link || proj.link,
        description: projObj.description || proj.description,
      })
    )
    .catch(err => console.error(err));
}

// updates a referrer's profile
function updateReferrer(refObj) {
  return Referrer.findById(refObj.id)
    .then(ref =>
      ref.update({
        first_name: refObj.first_name || ref.first_name,
        last_name: refObj.last_name || ref.last_name,
        company: refObj.company || ref.company,
        title: refObj.title || ref.title,
        email: refObj.email || ref.email,
        picture_url: refObj.picture_url || ref.picture_url,
        linkedin_url: refObj.linkedin_url || ref.linkedin_url,
      })
    )
    .catch(err => console.error(err));
}

function updateWorkExperience(workObj) {
  return WorkExperience.findOne({
    where: {
      candidate_id: workObj.candidate_id,
      id: workObj.id,
    },
  })
    .then(work =>
      work.update({
        start_date: workObj.start_date || work.start_date,
        end_date: workObj.end_date || work.end_date,
        current: workObj.current || work.current,
        title: workObj.title || work.title,
        company: workObj.company || work.company,
        description: workObj.description || work.description,
      })
    )
    .catch(err => console.error(err));
}

module.exports = {
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
};

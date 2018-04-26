'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('candidates', [{
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      first_name: 'John',
      last_name: 'Doe',
      title: "bum",
      email: 'demo@demo.com',
      password: 'asdf',
      picture: 'https://otakukart.com/wp-content/uploads/2017/09/limit_breaker_goku__3_by_rmehedi-dbloqht.png',
      location: "San Francisco",
      linkedin_url: 'https://www.linkedin.com',
      github_url: 'https://www.github.com',
      website_url: 'https://google.com',
      resume_url: 'https://google.com',
      id: 1,
      approval_status: false
    }, {
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      first_name: 'Jay',
      last_name: 'Awan',
      title: "bum",
      email: 'jay@demo.com',
      password: 'asdf',
      picture: 'https://otakukart.com/wp-content/uploads/2017/09/limit_breaker_goku__3_by_rmehedi-dbloqht.png',
      location: "San Francisco",
      linkedin_url: 'https://www.linkedin.com',
      github_url: 'https://www.github.com',
      website_url: 'https://google.com',
      resume_url: 'https://google.com',
      id: 2,
      approval_status: false
    }]).then((e) =>{
      return queryInterface.bulkInsert('education', [{
        createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
        updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
        school_name: 'Horizons',
        degree: 'Bachelors',
        major: 'Computer Science',
        graduation: "2017",
        candidate_id: 1,
        id: 1
      }, {
        createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
        updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
        school_name: 'George Washington University',
        major: 'Finance',
        degree: 'Bachelors',
        graduation: "2017",
        candidate_id: 2,
        id: 2
      }])}).then((a) => {
        return queryInterface.bulkInsert('referrers', [{
          createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
          first_name: 'Steven',
          last_name: 'Kong',
          company: 'Horizons',
          title: "TA",
          email: 'steven@demo.com',
          password: 'asdf',
          picture_url: 'https://otakukart.com/wp-content/uploads/2017/09/limit_breaker_goku__3_by_rmehedi-dbloqht.png',
          linkedin_url: 'https://www.linkedin.com',
          id: 1
        }, {
          createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
          first_name: 'Matt',
          last_name: 'Shwartz',
          company: 'Kindred Talent',
          title: "Front End Engineer",
          email: 'matt@demo.com',
          password: 'asdf',
          picture_url: 'https://otakukart.com/wp-content/uploads/2017/09/limit_breaker_goku__3_by_rmehedi-dbloqht.png',
          linkedin_url: 'https://www.linkedin.com',
          id: 2
        }])
      }).then((z) => {
        return queryInterface.bulkInsert('job_listings', [{
          createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
          description: 'Junior Software Engineer',
          title: 'Front End Software Engineer',
          listing_url: 'https://google.com',
          referrer_id: 1,
          id: 1
        }, {
          createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
          description: 'Junior Software Engineer',
          title: 'Back End Software Engineer',
          listing_url: 'https://google.com',
          referrer_id: 2,
          id: 2
        }])
      }).then((b) => {
        return queryInterface.bulkInsert('message_threads', [{
          createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
          candidate_id: 1,
          referrer_id: 1,
          id: 1
        }, {
          createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
          candidate_id: 2,
          referrer_id: 2,
          id: 2
        }])
      }).then((c) => {
        return queryInterface.bulkInsert('messages', [{
          message: "Hey John, I'd like to referrer you, are you interested?",
          createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
          message_thread_id: 1,
          sender_type: 1,
          id: 1
        }, {
          message: "Hey Steven, Yes! What do you need me to do?",
          createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
          message_thread_id: 1,
          sender_type: 2,
          id: 2
        }, {
          message: "Hey Jay, I'd like to referrer you, are you interested?",
          createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
          message_thread_id: 2,
          sender_type: 1,
          id: 3
        }, {
          message: "Hey Matt, Yes! What do you need me to do?",
          createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
          message_thread_id: 2,
          sender_type: 2,
          id: 4
        }])
      }).then((d) => {
        return queryInterface.bulkInsert('referrals', [{
          status: "true",
          createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
          message_thread_id: 1,
          job_listing_id: 1,
          id: 1
        }, {
          status: "true",
          createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
          message_thread_id: 2,
          job_listing_id: 2,
          id: 2
        }])
      }).then((e) => {
        return queryInterface.bulkInsert('work_experiences', [{
          createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
          start_date: new Date().toISOString().slice(0, 19).replace('T', ' '),
          end_date: new Date().toISOString().slice(0, 19).replace('T', ' '),
          current: false,
          title: "TA",
          company: "Horizons",
          description: "Taught Kids",
          candidate_id: 1,
          id: 1
        }, {
          createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
          start_date: new Date().toISOString().slice(0, 19).replace('T', ' '),
          end_date: new Date().toISOString().slice(0, 19).replace('T', ' '),
          current: false,
          title: "Student",
          company: "Horizons",
          description: "Learned Stuff",
          candidate_id: 2,
          id: 2
        }])
      }).then(() => {
        return queryInterface.bulkInsert('projects', [{
          start_date: new Date().toISOString().slice(0, 19).replace('T', ' '),
          end_date: new Date().toISOString().slice(0, 19).replace('T', ' '),
          createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
          current: true,
          title: "Kindred Talent",
          description: "Talent Website",
          candidate_id: 2,
          id: 1
        }, {
          start_date: new Date().toISOString().slice(0, 19).replace('T', ' '),
          end_date: new Date().toISOString().slice(0, 19).replace('T', ' '),
          createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
          current: false,
          title: "Slackbot",
          description: "AIBOT",
          candidate_id: 1,
          id: 2
        }])
      }).then(() => {
        return queryInterface.bulkInsert('skills', [{
          createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
          name: "JavaScript",
          candidate_id: 2,
          id: 1
        }, {
          createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
          name: "JavaScript",
          candidate_id: 1,
          id: 2
        }, {
          createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
          name: "React.js",
          candidate_id: 1,
          id: 3
        }, {
          createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
          name: "React.js",
          candidate_id: 2,
          id: 4
        }, {
          createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
          name: "Node.js",
          candidate_id: 1,
          id: 5
        }, {
          createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
          name: "SpringBoot (Java)",
          candidate_id: 2,
          id: 6
        }])
      }).then((e) =>{
        return queryInterface.bulkInsert('admins', [{
          createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
          email: 'darwish@demo.com',
          password: 'ktalent1',
          id: 1
        }, {
          createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
          email: 'lando@demo.com',
          password: 'ktalent2',
          id: 2
        }])});
    },

    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('projects', null, {})
      .then((a) => {
        return queryInterface.bulkDelete('admins', null, {})
      }).then((a) => {
          return queryInterface.bulkDelete('referrals', null, {})
        }).then((a) => {
            return queryInterface.bulkDelete('messages', null, {})
          }).then((a) => {
              return queryInterface.bulkDelete('message_threads', null, {})
            }).then((a) => {
                return queryInterface.bulkDelete('job_listings', null, {})
              }).then((a) => {
                  return queryInterface.bulkDelete('work_experiences', null, {})
                }).then((a) => {
                    return queryInterface.bulkDelete('education', null, {})
                  }).then((a) => {
                      return queryInterface.bulkDelete('referrers', null, {})
                  }).then((a) => {
                      return queryInterface.bulkDelete('skills', null, {})
                  }).then((a) => {
                      return queryInterface.bulkDelete('candidates', null, {})
                  })
    }
  };

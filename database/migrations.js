'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Candidates', [{
      first_name: 'John',
      last_name: 'Doe',
      email: 'demo@demo.com',
      password: 'asdf',
      picture: 'https://otakukart.com/wp-content/uploads/2017/09/limit_breaker_goku__3_by_rmehedi-dbloqht.png',
      location: "San Francisco",
      linkedin_url: 'https://www.linkedin.com',
      github_url: 'https://www.github.com',
      personal_website_url: 'https://google.com',
    }, {
      firstName: 'Jay',
      lastName: 'Awan',
      email: 'jay@demo.com',
      password: 'asdf',
      picture: 'https://otakukart.com/wp-content/uploads/2017/09/limit_breaker_goku__3_by_rmehedi-dbloqht.png',
      location: "San Francisco",
      linkedin_url: 'https://www.linkedin.com',
      github_url: 'https://www.github.com',
      personal_website_url: 'https://google.com',
    }]).then((e) =>{
      return queryInterface.bulkInsert('Education', [{
        school: 'Horizons',
        major: 'Computer Science',
        grad_year: 2017,
        candidateId: 1
      }, {
        school: 'George Washington University',
        major: 'Finance',
        grad_year: 2017,
        candidateId: 2
      }])}).then((a) => {
        return queryInterface.bulkInsert('Employees', [{
          first_name: 'Steven',
          last_name: 'Kong',
          email: 'steven@demo.com',
          password: 'asdf',
          picture: 'https://otakukart.com/wp-content/uploads/2017/09/limit_breaker_goku__3_by_rmehedi-dbloqht.png',
          location: "San Francisco",
          linkedin_url: 'https://www.linkedin.com',
          github_url: 'https://www.github.com',
          personal_website_url: 'https://google.com',
        }, {
          first_name: 'Matt',
          last_name: 'Shwartz',
          email: 'matt@demo.com',
          password: 'asdf',
          picture: 'https://otakukart.com/wp-content/uploads/2017/09/limit_breaker_goku__3_by_rmehedi-dbloqht.png',
          location: "San Francisco",
          linkedin_url: 'https://www.linkedin.com',
          github_url: 'https://www.github.com',
          personal_website_url: 'https://google.com',
        }])
      }).then((z) => {
        return queryInterface.bulkInsert('Job_listings', [{
          description: 'Junior Software Engineer',
          job_title: 'Front End Software Engineer',
          job_url: 'https://google.com',
          employeeId: 1
        }, {
          description: 'Junior Software Engineer',
          job_title: 'Back End Software Engineer',
          job_url: 'https://google.com',
          employeeId: 2
        }])
      }).then((b) => {
        return queryInterface.bulkInsert('Messages_threads', [{
          time_stamp: Date.now(),
          createdAt: Date.now(),
          updatedAt: Date.now(),
          candidateId: 1,
          employeeId: 1
        }, {
          time_stamp: Date.now(),
          createdAt: Date.now(),
          updatedAt: Date.now(),
          candidateId: 2,
          employeeId: 2
        }])
      }).then((c) => {
        return queryInterface.bulkInsert('messages', [{
          message: "yoyoyo",
          time_sent: Date.now(),
          createdAt: Date.now(),
          updatedAt: Date.now(),
          employeeId: 1,
          messagesThreadId: 1,
          candidateId: null
        }, {
          message: "sup fam",
          time_sent: Date.now(),
          createdAt: Date.now(),
          updatedAt: Date.now(),
          employeeId: null,
          messagesThreadId: 1,
          candidateId: 1
        }])
      }).then((d) => {
        return queryInterface.bulkInsert('referals', [{
          referral_sent: true,
          job_obtained: false,
          createdAt: Date.now(),
          updatedAt: Date.now(),
          candidateId: 1,
          employeeId: 1,
          jobListingId: 1,
        }, {
          referral_sent: true,
          job_obtained: false,
          createdAt: Date.now(),
          updatedAt: Date.now(),
          candidateId: 2,
          employeeId: 2,
          jobListingId: 2,
        }])
      }).then((e) => {
        return queryInterface.bulkInsert('work_experiences', [{
          employment_date_start: Date.now(),
          employment_date_end: Date.now(),
          role: "TA",
          company: "Horizons",
          description: "Taught Kids",
          candidateId: 1
        }, {
          employment_date_start: Date.now(),
          employment_date_end: Date.now(),
          role: "Student",
          company: "Horizons",
          description: "Learned Stuff",
          candidateId: 2
        }])
      });
    },

    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Candidates', null, {})
      .then((a) => {
        return queryInterface.bulkDelete('education', null, {})
      }).then((a) => {
          return queryInterface.bulkDelete('employees', null, {})
        }).then((a) => {
            return queryInterface.bulkDelete('job_listings', null, {})
          }).then((a) => {
              return queryInterface.bulkDelete('messages', null, {})
            }).then((a) => {
                return queryInterface.bulkDelete('messages_threads', null, {})
              }).then((a) => {
                  return queryInterface.bulkDelete('referals', null, {})
                }).then((a) => {
                    return queryInterface.bulkDelete('work_experiences', null, {})
                  })
    }
  };

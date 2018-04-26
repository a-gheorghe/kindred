'use strict';

module.exports = {

  /*
  Add altering commands here.
  Return a promise to correctly handle asynchronicity.

  Example:
  return queryInterface.createTable('users', { id: Sequelize.INTEGER });
  */

  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('candidates', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      picture: {
        type: Sequelize.TEXT,
      },
      location: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      linkedin_url: {
        type: Sequelize.TEXT,
      },
      github_url: {
        type: Sequelize.TEXT,
      },
      website_url: {
        type: Sequelize.TEXT,
      },
      resume_url: {
        type: Sequelize.TEXT,
      },
      approval_status: {
        type: Sequelize.BOOLEAN,
        default: false,
        allowNull: false
      }
    })
    .then(() => {
      return queryInterface.createTable('admins', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false,
        }
      })
    })
    .then(() => {
      return queryInterface.createTable('referrers', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        first_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        last_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        company: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        title: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        picture_url: {
          type: Sequelize.TEXT,
        },
        linkedin_url: {
          type: Sequelize.TEXT,
        },
      })
    })
    .then(() => {
      return queryInterface.createTable('message_threads', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        }
      })
    })
    .then(() => {
      return queryInterface.createTable('messages', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        message: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        sender_type: {
          type: Sequelize.INTEGER,
          allowNull: false
        }
      })
    })
    .then(() => {
      return queryInterface.createTable('job_listings', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        description: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        title: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        listing_url: {
          type: Sequelize.TEXT,
          allowNull: false,
        }
      })
    })
    .then(() => {
      return queryInterface.createTable('work_experiences', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        start_date: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        end_date: {
          type: Sequelize.DATE,
        },
        current: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          default: false,
        },
        title: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        company: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        description: {
          type: Sequelize.TEXT,
        }
      })
    })
    .then(() => {
      return queryInterface.createTable('education', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        school_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        degree: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        major: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        graduation: {
          type: Sequelize.STRING,
          allowNull: false,
        }
      })
    })
    .then(() => {
      return queryInterface.createTable('referrals', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        status: {
          type: Sequelize.STRING,
          allowNull: false,
        }
      })
    })
    .then(() => {
      return queryInterface.createTable('projects', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        start_date: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        end_date: {
          type: Sequelize.DATE,
        },
        current: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        },
        title: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        link: {
          type: Sequelize.TEXT,
          allowNull: true
        },
        description: {
          type: Sequelize.TEXT,
          allowNull: false
        }
      })
    })
    .then(() => {
      return queryInterface.createTable('skills', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        }
      })
    })
  },

  down: (queryInterface, Sequelize) => {
    /*
    Add reverting commands here.
    Return a promise to correctly handle asynchronicity.

    Example:
    return queryInterface.dropTable('users');
    */

    return queryInterface.dropTable('projects')
    .then(() => {
      return queryInterface.dropTable('admins')
    }).then(() => {
      return queryInterface.dropTable('referrals')
    }).then(() => {
      return queryInterface.dropTable('messages')
    }).then(() => {
      return queryInterface.dropTable('message_threads')
    }).then(() => {
      return queryInterface.dropTable('job_listings')
    }).then(() => {
      return queryInterface.dropTable('work_experiences')
    }).then(() => {
      return queryInterface.dropTable('education')
    }).then(() => {
      return queryInterface.dropTable('referrers')
    }).then(() => {
      return queryInterface.dropTable('skills')
    }).then(() => {
      return queryInterface.dropTable('candidates')
    });
  }
};

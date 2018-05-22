

module.exports = {

  /*
  Add altering commands here.
  Return a promise to correctly handle asynchronicity.

  Example:
  return queryInterface.createTable('users', { id: Sequelize.INTEGER });
  */

  up: (queryInterface, Sequelize) => queryInterface.createTable('candidates', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    last_name: {
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
    location: {
      type: Sequelize.TEXT,
      allowNull: false,
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
      allowNull: false,
    },
  })
    .then(() => queryInterface.createTable('admins', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    }))
    .then(() => queryInterface.createTable('referrers', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
    }))
    .then(() => queryInterface.createTable('message_threads', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    }))
    .then(() => queryInterface.createTable('messages', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      message: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      sender_type: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    }))
    .then(() => queryInterface.createTable('job_listings', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
      },
    }))
    .then(() => queryInterface.createTable('work_experiences', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
      },
    }))
    .then(() => queryInterface.createTable('education', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
      },
    }))
    .then(() => queryInterface.createTable('referrals', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    }))
    .then(() => queryInterface.createTable('projects', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
        allowNull: true,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
    }))
    .then(() => queryInterface.createTable('skills', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      skill: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    })),

  down: (queryInterface, Sequelize) =>
    /*
    Add reverting commands here.
    Return a promise to correctly handle asynchronicity.

    Example:
    return queryInterface.dropTable('users');
    */

    queryInterface.dropTable('projects')
      .then(() => queryInterface.dropTable('admins')).then(() => queryInterface.dropTable('referrals')).then(() => queryInterface.dropTable('messages'))
      .then(() => queryInterface.dropTable('message_threads'))
      .then(() => queryInterface.dropTable('job_listings'))
      .then(() => queryInterface.dropTable('work_experiences'))
      .then(() => queryInterface.dropTable('education'))
      .then(() => queryInterface.dropTable('referrers'))
      .then(() => queryInterface.dropTable('skills'))
      .then(() => queryInterface.dropTable('candidates')),

};

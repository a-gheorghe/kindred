'use strict';

// // On Windows we needa DBPASSWORD
// if (/^win/.test(process.platform) && ! process.env.DBPASSWORD) {
//   console.log('You need to set DBPASSWORD in your env.sh file');
//   process.exit(1);
// }

const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  operatorsAliases: false,
  dialectOptions: {
    ssl: true
  },
});

sequelize
  .authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));

const Admin = sequelize.define('admins', {
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

const Candidate = sequelize.define('candidates', {
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
});

const Referrer = sequelize.define('referrers', {
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
  }
});

const Message = sequelize.define('messages', {
  message: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  sender_type: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

const MessageThread = sequelize.define('message_threads', {
});

const JobListing = sequelize.define('job_listings', {
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
});

const WorkExperience = sequelize.define('work_experiences', {
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
});

const Education = sequelize.define('education', {
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
});

const Referral = sequelize.define('referrals', {
  status: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

const Project = sequelize.define('projects', {
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
});

const Skill = sequelize.define('skills', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

Candidate.hasMany(Education, {
  foreignKey: 'candidate_id',
});

Candidate.hasMany(WorkExperience, {
  foreignKey: 'candidate_id',
});
Candidate.hasMany(Skill, {
  foreignKey: 'candidate_id'
});
Candidate.hasMany(Project, {
  foreignKey: 'candidate_id',
});
Candidate.hasMany(MessageThread, {
  foreignKey: 'candidate_id',
});

JobListing.hasMany(Referral, {
  foreignKey: 'job_listing_id'
});

MessageThread.hasMany(Message, {
  foreignKey: 'message_thread_id',
});

MessageThread.hasMany(Referral, {
  foreignKey: 'message_thread_id'
});

Referrer.hasMany(JobListing, {
  foreignKey: 'referrer_id',
});

Referrer.hasMany(MessageThread, {
  foreignKey: 'referrer_id',
});


Education.belongsTo(Candidate, {
  foreignKey: 'candidate_id',
});
JobListing.belongsTo(Referrer, {
  foreignKey: 'referrer_id',
});
Project.belongsTo(Candidate,  {
  foreignKey: 'candidate_id',
});

Message.belongsTo(MessageThread, {
  foreignKey: 'message_thread_id',
});

MessageThread.belongsTo(Candidate,  {
  foreignKey: 'candidate_id',
});
MessageThread.belongsTo(Candidate,  {
  foreignKey: 'candidate_id',
});

MessageThread.belongsTo(Referrer, {
  foreignKey: 'referrer_id',
});

Referral.belongsTo(MessageThread, {
  foreignKey: 'message_thread_id',
});

Referral.belongsTo(JobListing, {
  foreignKey: 'job_listing_id'
});
Skill.belongsTo(Candidate,  {
  foreignKey: 'candidate_id',
});
WorkExperience.belongsTo(Candidate,  {
  foreignKey: 'candidate_id',
});

module.exports = {
  Admin,
  Candidate,
  Referrer,
  Message,
  MessageThread,
  JobListing,
  WorkExperience,
  Education,
  Referral,
  Project,
  Skill,
  sequelize,
  Sequelize,
};

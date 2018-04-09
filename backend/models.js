const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DEV_DATABASE_URL, {
  host: 'localhost',
  dialect: 'postgres'
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Define models here
const User = sequelize.define('user', {
  username: { type: Sequelize.STRING, allowNull: false, unique: true},
  password: { type: Sequelize.STRING, allowNull: false }
});


// Export models here
module.exports = {
  sequelize,
  Sequelize,
  User
};

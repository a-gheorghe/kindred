const Sequelize = require('sequelize');
var sequelize;

sequelize = new Sequelize(process.env.DEV_DATABASE_URL);

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

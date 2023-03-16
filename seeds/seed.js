const sequelize = require('../config/connection');
const { User, Posting } = require('../models');

const userData = require('./userData.json');
const postingData = require('./postingData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Posting.bulkCreate(postingData);

  process.exit(0);
};

seedDatabase();

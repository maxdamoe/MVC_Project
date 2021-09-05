
const seedComments = require("./comment_seeds");
const seedPosts = require("./posts_seeds");
const seedUsers = require("./users_seeds");


const sequelize = require("../config/connection");

const seedAll = async () => {
await sequelize.sync({ force: true });
await seedUsers();
await seedPosts();
await seedComments();
  process.exit(0);
};

seedAll();

const { User } = require("../models");

const userdata = [
  {
    username: "fatmax9",
    email: "fatmax9@email.com",
    password: "password",
  },
  {
    username: "spelunker",
    email: "spelunker@spelunk.com",
    password: "password",
  },
  {
    username: "fakeuser",
    email: "fakeemail@fake.com",
    password: "password",
  },
  {
    username: "hurdur",
    email: "hurhur@hurdur.com",
    password: "password",
  },
  {
    username: "basketballplyr",
    email: "bballplyr@bball.com",
    password: "password",
  },
  {
    username: "sprout",
    email: "sproot@plant.com",
    password: "password",
  },
  {
    username: "lackingFOcus",
    email: "lacker@lackhard.com",
    password: "password",
  },
  {
    username: "songSucks",
    email: "shitesong@songs.com.cn",
    password: "password",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;

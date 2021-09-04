const { Comment } = require("../models");

const commentdata = [
  {
    comment_text: "this is copy comment text",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: "Please use the sharing tools found via the share button at the top or side of articles. Copying articles to share with others is a breach of FT.com T&Cs and Copyright Policy. Email licensing@ft.com to buy additional rights. Subscribers may share up to 10 or 20 articles per month using the gift article service. More information can be found at https://www.ft.com/tour. https://www.ft.com/content/c318f7e3-8c00-45d4-87d6-ea5599d3769e?FTCamp=engage/CAPI/app/Channel_Refinitiv//B2B Today, NFTs are all the rage. In the first six months of the year, NFT sales amounted to $2.5bn, compared with less than $14m in the same period last year. In March, a crypto investor known as MetaKovan paid a record $69m for an NFT by digital artist Beeple.",
    user_id: 4,
    post_id: 3,
  },
  {
    comment_text: "Quigley’s web investment background made him an ideal candidate for crypto,",
    user_id: 6,
    post_id: 7,
  },
  {
    comment_text: "Please use the sharing tools found via the share button at the top or side of articles. Copying articles to share with others is a breach of FT.com T&Cs and Copyright Policy. Email licensing@ft.com to buy additional rights. Subscribers may share up to 10 or 20 articles per month using the gift article service. More information can be found at https://www.ft.com/tour. https://www.ft.com/content/c318f7e3-8c00-45d4-87d6-ea5599d3769e?FTCamp=engage/CAPI/app/Channel_Refinitiv//B2B Meanwhile, investors have been flocking this year to bet on transaction systems (financial, but in future for any sale process) where blockchain tech cuts out intermediaries and replaces them with preprogrammed algorithms.",
    user_id: 88,
    post_id: 93,
  },
  {
    comment_text: "Interest in this kind of decentralised finance has exploded since January, ",
    user_id: 16,
    post_id: 23,
  },
  {
    comment_text: "One way around this would be to send back the data and HTM",
    user_id: 9,
    post_id: 30,
  },
  {
    comment_text: "Even if that moment of loading is acceptable to your users,",
    user_id: 11,
    post_id: 10,
  },
  {
    comment_text: "I am coping extremly hard for evertyhgingwkpgl",
    user_id: 85,
    post_id: 44,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
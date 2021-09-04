const { Post } = require("../models");

const postdata = [
  {
    title: "This is a post about posting",
    post_url: "https://blockscout.com/xdai/mainnet/",
    user_id: 1,
  },
  {
    title: "Cmon man, so many seed posts!",
    post_url: "https://www.youtube.com/watch?v=dm87PN-fTlg&list=RD8Zs6pTJEQTs&index=16",
    user_id: 4,
  },
  {
    title: "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    post_url: "https://www.google.com/search?q=calculator&oq=calculator&aqs=chrome.0.69i59l2.1306j0j1&sourceid=chrome&ie=UTF-8",
    user_id: 34,
  },
  {
    title: "I need my coins to go up ",
    post_url: "https://www.binance.com/en/trade/SNX_USDT",
    user_id: 6,
  },
  {
    title: "One day I will be wealthy",
    post_url: "https://www.chess.com/",
    user_id: 5,
  },
  {
    title: "Buy low, sell high baby",
    post_url: "https://www.google.com/search?q=88+mph+coinmarket+cap&oq=&aqs=chrome.4.69i59i450l8.167311j0j1&sourceid=chrome&ie=UTF-8",
    user_id: 2,
  },
  {
    title: "rum rage",
    post_url: "https://www.youtube.com/watch?v=rwCkzUI43m4",
    user_id: 8,
  },
  {
    title: "buy snx, get wealth",
    post_url: "https://www.reddit.com/r/synthetix_io/comments/oi00vn/thales_lyra_aelin_airdrop_for_snx_stakers/",
    user_id: 7,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;

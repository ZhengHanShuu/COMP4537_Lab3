// ./modules/utils.js
const messages = require('../lang/en/en');

function getDate(name) {
  const now = new Date();
  //return `Hello ${name}, What a beautiful day. Server current date and time is ${now.toString()}`;
}

module.exports = { getDate };
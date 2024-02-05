// ./modules/utils.js
const messages = require('../lang/en/en');
const moment = require('moment-timezone');

function getDate(name) {
  //const now = new Date();
  const now = moment().tz('America/Los_Angeles');
  return `Hello ${name}, What a beautiful day. Server current date and time is ${now.toString()}`;
}

module.exports = { getDate };
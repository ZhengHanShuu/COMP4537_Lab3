// server.js
const http = require('http');
const url = require('url');
const utils = require('./modules/utils');
const messages = require('./lang/en/en');

const hostname = '127.0.0.1'; // Use your server's IP address or domain name
const port = 3000;

const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url, true).query;
  if (req.url.startsWith('/COMP4537/labs/3/getDate')) {
    const queryObject = url.parse(req.url, true).query; // Ensure this line is correctly placed and used
    const name = queryObject.name;
    const greeting = utils.getDate(name); // Make sure utils.getDate() is correctly importing and using any necessary data
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<div style="color: blue;">${greeting}</div>`);
  } else {
    res.statusCode = 404;
    res.end('<h1>404 Not Found</h1>');
  }
  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
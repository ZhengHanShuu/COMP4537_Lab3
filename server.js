const http = require('http');
const url = require('url');
const utils = require('./modules/utils');

const port = process.env.PORT || 3000; // Use the PORT environment variable or default to 3000

const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url, true).query;
  
  // Simplified by removing the redundant declaration of queryObject
  if (req.url.startsWith('/COMP4537/labs/3/getDate')) {
    const name = queryObject.name;
    const greeting = utils.getDate(name);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<div style="color: blue;">${greeting}</div>`);
  } else {
    res.statusCode = 404;
    res.end('<h1>404 Not Found</h1>');
  }
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

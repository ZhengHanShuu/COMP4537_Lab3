// Import the required modules
const http = require('http'); // HTTP module to create server
const url = require('url'); // URL module to parse URLs
const utils = require('./modules/utils'); // Custom utils module for additional functionalities

// Define the port on which the server will listen. Use the environment variable PORT or default to 3000
const port = process.env.PORT || 3000;

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Parse the URL and query parameters
  const queryObject = url.parse(req.url, true).query;
  
  // Check if the request URL matches a specific endpoint
  if (req.url.startsWith('/COMP4537/labs/3/getDate')) {
    // Retrieve the 'name' parameter from the query string
    const name = queryObject.name;
    // Use the custom utils module to generate a greeting message with the current date
    const greeting = utils.getDate(name);
    // Set the response HTTP status code to 200 (OK)
    res.statusCode = 200;
    // Set the Content-Type of the response to text/html
    res.setHeader('Content-Type', 'text/html');
    // Send the response with the greeting message wrapped in a div with blue text color
    res.end(`<div style="color: blue;">${greeting}</div>`);
  } else {
    // If the request URL does not match the expected endpoint, return a 404 Not Found error
    res.statusCode = 404;
    res.end('<h1>404 Not Found</h1>');
  }
});

// Start the server and listen on the specified port
server.listen(port, () => {
  // Log a message to the console indicating that the server is running and on which port
  console.log(`Server running on port ${port}`);
});


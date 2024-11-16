const express = require('express');
const path = require('path');
const app = express();
const demoRouter = require('./routes/demoRouter');
const port = 3000;

// Middleware to parse JSON bodies
// app.use() is used to add middleware to the middleware stack. All incoming requests will pass through this middleware.
// express.json() is a built-in middleware function in Express that handles requests with a 'Content-Type' of 'application/json'.
// It parses the JSON payload from the request body, converts it into a JavaScript object,
// attaches it to req.body, and then calls next() to pass control to the next middleware or route handler.

app.use(express.json());

// Demo route for GET requests to the path '/api/greet'
app.get('/api/greet', (req, res) => {
  return res
    .status(200)
    .json({ message: 'Hello, welcome to the demo server!' });
});

// Demo route for GET requests to the path '/api/welcome' that serves a static file (welcome.gif)

// __dirname is a global variable in Node.js that represents the absolute path of the directory containing the current file
console.log('__dirname in server.js is:', __dirname);

app.get('/api/welcome', (req, res) => {
  // Respond to the GET request by sending a file
  // path.resolve(__dirname, './client/welcome.gif') constructs an absolute path to 'welcome.gif' in the 'client' folder
  return res
    .status(200) // Set HTTP status code to 200 (OK)
    .sendFile(path.resolve(__dirname, './client/welcome.gif')); // Send the file located at the resolved path
});

// Demo route for POST requests to the path '/api/echo'
app.post('/api/echo', (req, res) => {
  // Log the incoming request body to the console
  console.log('req.body:', req.body);

  // Destructure the 'message' property from the request body
  const { message } = req.body;

  // Respond with a 200 OK status and a JSON object containing the received message
  return res.status(200).json({ received: message });
});

// Demo route for PUT requests to the path '/api/update'
app.put('/api/update', (req, res) => {
  // Destructure 'id' and 'data' properties from the request body
  const { id, data } = req.body;

  // Respond with a 200 OK status and a JSON object confirming the update
  return res.status(200).json({
    message: `Updated item ${id}`, // Dynamic message with the provided id
    data, // Echo the updated data back to the client
  });
});

// Demo route for DELETE requests to the path '/api/delete/:id'
app.delete('/api/delete/:id', (req, res, next) => {
  // Log the parameters from the URL to the console
  console.log('req.params in app.delete:', req.params);

  // Destructure the 'id' parameter from req.params
  const { id } = req.params;

  // if id is not a number, call next with an error object
  if (isNaN(id)) {
    return next({
      log: 'Invalid ID',
      status: 400,
      message: { err: 'Invalid ID' },
    });
  }

  // Respond with a 200 OK status and a JSON object confirming the deletion
  return res.status(200).json({
    message: `Deleted item with ID: ${id}`, // Dynamic message with the provided id
  });
});

// Log a message to indicate the router is being initialized
console.log('Router initialized');

// Mount the demoRouter on the '/router' path
app.use('/router', demoRouter);

// Demo route for serving an HTML file for GET requests to the path '/index'
app.get('/index', (req, res) => {
  // Serve the 'index.html' file located in the './client' directory
  res.sendFile(path.resolve(__dirname, './client/index.html'));
});

// Global error handling middleware - handles errors when an argument is passed to next(). Note that this handler function has 4 parameters!
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// Catch-all route handler for any requests to an unknown route (404)
app.use((req, res) => {
  return res.status(404).sendFile(path.resolve(__dirname, './client/404.png'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

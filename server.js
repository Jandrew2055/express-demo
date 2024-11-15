const express = require('express');
const path = require('path');
const app = express();
const demoRouter = require('./routes/demoRouter');
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Demo route for GET requests
app.get('/api/greet', (req, res) => {
  return res
    .status(200)
    .json({ message: 'Hello, welcome to the demo server!' });
});

// Demo route for GET requests that sends a file
// __dirname is a global variable that represents the absolute path of the current file
console.log('__dirname in server.js is:', `${__dirname}`);
app.get('/api/welcome', (req, res) => {
  return res
    .status(200)
    .sendFile(path.resolve(__dirname, './client/welcome.gif'));
});

// Demo route for POST requests
app.post('/api/echo', (req, res) => {
  const { message } = req.body;
  return res.status(200).json({ received: message });
});

// Demo route for PUT requests
app.put('/api/update', (req, res) => {
  const { id, data } = req.body;
  return res.status(200).json({ message: `Updated item ${id}`, data });
});

// Demo route for DELETE requests
app.delete('/api/delete/:id', (req, res) => {
  console.log('req.params:', req.params);
  const { id } = req.params;
  return res.status(200).json({ message: `Deleted item with ID: ${id}` });
});

// Use the demo router for routes starting with /router
app.use('/router', demoRouter);

// Global error handling middleware
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

// Catch-all route handler for any requests to an unknown route
app.use((req, res) => {
  return res.status(404).sendFile(path.resolve(__dirname, './client/404.png'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// create exports controller object
const demoController = {};

// Add methods to the empty object
demoController.getGreeting = (req, res) => {
  return res.status(200).json({ message: 'Hello from the new controller!' });
};

demoController.createMessage = (req, res) => {
  const { message } = req.body;
  return res.status(201).json({ message: `Created message: ${message}` });
};

// Export the object
module.exports = demoController;

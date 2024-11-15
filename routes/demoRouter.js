const express = require('express');
const router = express.Router();
const demoController = require('../controllers/demoController');

// Existing routes
router.get('/demo', (req, res) => {
  res.status(200).json({ message: 'This is a demo route from the router!' });
});

router.post('/demo', (req, res) => {
  const { input } = req.body;
  res.status(200).json({ received: `You sent: ${input}` });
});

//routes using demoController
router.get('/greeting', demoController.getGreeting);

router.post('/message', demoController.createMessage);

module.exports = router;

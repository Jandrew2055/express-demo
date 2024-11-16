const express = require('express');
const router = express.Router();
const demoController = require('../controllers/demoController');

console.log('__dirname in demoRouter.js is:', __dirname);

// routers where responses are sent from handler function in the router
router.get('/demo', (req, res) => {
  res.status(200).json({ message: 'This is a demo route from the router!' });
});

router.post('/demo', (req, res) => {
  const { input } = req.body;
  res.status(200).json({ received: `You sent: ${input}` });
});

// routes using handler functions from demoController below

// route for GET requests to the subpath '/message'
router.get('/greeting', demoController.getGreeting);

// route for POST requests to the subpath '/message'
router.post('/message', demoController.createMessage);

// route for POST requests to the subpath '/sendText' - triggered by button in index.html
router.post(
  '/sendText',
  (req, res, next) => {
    console.log("I'm the first handler of the `POST router/sendText` route");
    return next();
  },
  demoController.capitalizeText
);

// route for POST requests to the subpath '/sendMonth' - triggered by button in index.html
router.post(
  '/sendMonth',
  demoController.findSeason,
  demoController.sendSeasonImageURL
);

module.exports = router;

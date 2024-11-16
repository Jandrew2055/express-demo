// Create exports controller object
const demoController = {};

const monthToSeason = {
  January: 'Winter',
  February: 'Winter',
  March: 'Spring',
  April: 'Spring',
  May: 'Spring',
  June: 'Summer',
  July: 'Summer',
  August: 'Summer',
  September: 'Fall',
  October: 'Fall',
  November: 'Fall',
  December: 'Winter',
};

const Descriptions = {
  Fall: 'Fall is the season of change and harvest.',
  Winter: 'Winter is the season of snow and holidays.',
  Spring: 'Spring is the season of flowers and new beginnings.',
  Summer: 'Summer is the season of sun and fun.',
};

// ADD METHODS TO THE CONTROLLER OBJECT below

// Add a method to handle greeting requests
demoController.getGreeting = (req, res) => {
  // Send a success response with a greeting message
  return res.status(200).json({ message: 'Hello from the new controller!' });
};

// Add a method to handle message creation
demoController.createMessage = (req, res, next) => {
  // Log the request body to the console
  console.log('req.body in demoController.createMessage:', req.body);

  // Destructure the message from the request body
  const { message } = req.body;

  // Check if the message is missing in the request body
  if (message === undefined) {
    // Pass an error object to the next middleware if message is missing
    return next({
      log: 'demoController.createMessage: Missing message in request body',
      status: 400,
      message: { err: 'Message is required' },
    });
  }

  // Send a success response with the created message
  return res.status(201).json({ message: `Created message: ${message}` });
};

// Add a method to capitalize input text
demoController.capitalizeText = (req, res) => {
  // Log a message indicating which handler is being used
  console.log("I'm the capitalizeText handler of the demoController");

  // Destructure the input from the request body
  const { input } = req.body;

  // Send a success response with the capitalized text
  return res.status(200).json({ capitalizedText: input.toUpperCase() });
};

// Add a method to find the season based on the month
demoController.findSeason = (req, res, next) => {
  // Log a message indicating which handler is being used
  console.log("I'm the findSeason handler of the demoController");

  // Destructure the month from the request body
  const { month } = req.body;

  // Check if the month is missing in the request body
  if (month === undefined) {
    // Pass an error object to the next middleware if month is missing
    return next({
      log: 'demoController.findSeason: Missing month in request body',
      status: 400,
      message: { err: 'Month is required' },
    });
  }

  // Find the season based on the month
  const season = monthToSeason[month];

  // Check if the provided month is invalid
  if (season === undefined) {
    // Pass an error object to the next middleware if the month is invalid
    return next({
      log: 'demoController.findSeason: Invalid month',
      status: 400,
      message: { err: 'Invalid month' },
    });
  }

  // Save the season to res.locals to pass to the next middleware
  res.locals.season = season;

  // Pass control to the next middleware
  return next();
};

// Add a method to send the corresponding season image URL
demoController.sendSeasonImageURL = (req, res, next) => {
  // Log a message indicating which handler is being used
  console.log("I'm the sendSeasonImageURL handler of the demoController");

  // Define image URLs for each season
  const seasonImageURLs = {
    Fall: 'https://upload.wikimedia.org/wikipedia/commons/6/61/Find47_Fukushima-Autumn_leaves_train_%28No._1_Tadami_River_Bridge%2C_Mishima_Town%29-m.jpg',
    Winter:
      'https://upload.wikimedia.org/wikipedia/commons/e/e1/Haanja_2010_01_1.jpg',
    Spring:
      'https://upload.wikimedia.org/wikipedia/commons/1/10/Spring_wildflowers_in_south_central_Washington_%2834993739645%29.jpg',
    Summer:
      'https://upload.wikimedia.org/wikipedia/commons/d/d1/Corong_Corong_Beach%2C_Coconut_palm_trees%2C_El_Nido%2C_Palawan_Island%2C_Philippines.jpg',
  };

  // Retrieve the corresponding image URL for the season
  const imageURL = seasonImageURLs[res.locals.season];
  const seasonDescription = Descriptions[res.locals.season];

  // Check if imageURL is valid
  if (!imageURL) {
    // Pass an error object to the next middleware if imageURL is invalid
    const error = {
      log: 'Invalid season: imageURL not provided',
      status: 400,
      message: { err: 'Invalid season' },
    };
    return next(error);
  }

  // Send the image URL and season description in the response
  return res.status(200).json({ imageURL, seasonDescription });
};

module.exports = demoController;

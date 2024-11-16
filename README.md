Simple Express Demo
===================

Project Overview
----------------

This is a simple Express.js project that demonstrates routing, controller-based structure, and handling both static files and dynamic API responses. The application allows users to:

-   Capitalize input text.
-   Submit a month and receive an associated season and seasonal image.
-   View a simple HTML interface for testing these endpoints.

File Structure
--------------
```
📁 client
  ├── 📄 404.png
  ├── 📄 index.html
  └── 📄 welcome.gif
📁 controllers
  └── 📜 demoController.js
📁 routes
  └── 📜 demoRouter.js
📄 .gitignore
📄 Express-Demo.postman_collection.json
📄 package-lock.json 
📄 package.json
📄 README.md
📜 server.js
```

Prerequisites
-------------

-   **Node.js** and **npm** installed on your machine.

Setup Instructions
------------------

1.  **Clone the repository**:

    bash

    Copy code

    `git clone <repository-url>
    cd <repository-directory>`

2.  **Install dependencies**:

    bash

    Copy code

    `npm install`

3.  **Start the server**:

    bash

    Copy code

    `npm start`

4.  **Test Routes with Postman"

    The server will be running at `http://localhost:3000/`
    Construct requests yourself in postman after inspecting server.js, demoRouter.js, and demoController.js
    OR, import the Express-Demo.postman_collection.json into Postman to explore all the routes

5. **Test and inspect HTML landing page**

   Go to <http://localhost:3000/index> to interact with an HTML landing page
   Interact with the buttons and input boxes. Inspect the fetch requests in the HTML to understand how they work, and how      the requests are routed. 

Available Routes
----------------

Here are the key routes exposed by this project:

### Static Routes

-   `GET /index`: Serves the `index.html` file.
-   `GET /api/welcome`: Serves the `welcome.gif` file.
-   `Catch all error handler*: Returns the `404.png` image.

### API Routes

#### General

-   `GET /api/greet`: Returns a welcome message.
-   `POST /api/echo`: Echoes the message received in the request body.

#### Dynamic Functionalities

-   `POST /router/sendText`: Capitalizes text input from the user.
-   `POST /router/sendMonth`: Accepts a month and returns the corresponding season and image.

Error Handling
--------------

If invalid or missing data is provided, specific error messages will be returned with appropriate HTTP status codes.

The application uses centralized error handling with a global error handler. Some errors handling within middleware pass custom error objects to next() and trigger the global error handler. 

-   Errors are logged to the console.
-   A JSON response with status and error details is sent back to the client.




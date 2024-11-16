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

4.  **Test Routes with Postman - included 

    Open your browser and navigate to <http://localhost:3000>.

Available Routes
----------------

Here are the key routes exposed by this project:

### Static Routes

-   `GET /index`: Serves the `index.html` file.
-   `GET /api/welcome`: Serves the `welcome.gif` file.
-   **Unknown routes**: Returns the `404.png` image.

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

The application uses centralized error handling:

-   Errors are logged to the console.
-   A JSON response with status and error details is sent back to the client.

Example Usage
-------------

**From the browser:**

-   Open <http://localhost:3000/index> and try submitting text or a month.

**Using Postman:**

-   `POST` <http://localhost:3000/router/sendText> with body `{ "input": "example" }`.
-   `POST` <http://localhost:3000/router/sendMonth> with body `{ "month": "January" }`.



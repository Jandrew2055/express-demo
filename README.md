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

## Route Documentation

### Basic Express Routes
- `GET /api/greet` - Basic GET route returning JSON response
- `GET /api/welcome` - Serving static files (GIF)
- `POST /api/echo` - Handling POST requests with JSON body
- `PUT /api/update` - Demonstrating PUT method with request body
- `DELETE /api/delete/:id` - URL parameters and DELETE method
- `GET /index` - Serving static HTML files

### Error Handling
- `GET /error` - Demonstrates 404 catch-all error handling
- `DELETE /api/delete/abc` - Error handling for invalid parameters
- `POST /router/message` (empty body) - Request body validation errors
- `POST /router/sendMonth` (invalid month) - Business logic error handling

### Router Module Implementation (`/router` prefix)
Demonstrates Express Router for route modularization:
- `GET /router/demo` - Basic router GET endpoint
- `POST /router/demo` - Router handling POST with body parsing

### Controller Pattern
Demonstrates MVC-style separation using controllers:
- `GET /router/greeting` - Controller integration with router
- `POST /router/message` - Basic controller message handling
- `POST /router/sendText` - Text processing controller (capitalization)
- `POST /router/sendMonth` - Complex logic in controller (season determination)


Error Handling
--------------

If invalid or missing data is provided, specific error messages will be returned with appropriate HTTP status codes.

The application uses centralized error handling with a global error handler. Some errors handling within middleware pass custom error objects to next() and trigger the global error handler. 

-   Errors are logged to the console.
-   A JSON response with status and error details is sent back to the client.




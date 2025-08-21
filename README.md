📋 Web Task Manager
A simple, full-stack task management application to help you keep track of your daily tasks. This project is built with a separate frontend and backend, allowing for a clear separation of concerns.

🚀 Getting Started
Follow these instructions to set up and run the project locally.

⚙️ Backend Setup

The backend is built with Node.js and uses MongoDB for the database.

Navigate to the backend directory:

cd <your_backend_directory>

Install dependencies:

npm install

Set up environment variables:

Create a .env file in the root of the backend directory.

Add your MongoDB connection URI to the file:

MONGO_URI="mongodb://127.0.0.1:27017/taskmanager"

You can use a local MongoDB instance or a cloud-hosted one like MongoDB Atlas.

Run the backend server:

npm run dev

The server will run on port 5001.

💻 Frontend Setup

The frontend is a React application that communicates with the backend API.

Navigate to the frontend directory:

cd <your_frontend_directory>

Install dependencies:

npm install

Start the frontend application:

npm start

The application will typically open in your browser at http://localhost:3000.

🛠️ Tech Stack
This project is built using the following technologies:

Frontend:

React: A JavaScript library for building user interfaces.

Axios: A promise-based HTTP client for making API requests.

Tailwind CSS: A utility-first CSS framework for styling.

Backend:

Node.js: A JavaScript runtime environment.

Express: A web framework for Node.js.

Mongoose: An elegant MongoDB object modeling for Node.js.

CORS: A Node.js package for providing a Connect/Express middleware that can be used to enable cross-origin resource sharing.

dotenv: A zero-dependency module that loads environment variables from a .env file into process.env.

🐛 Known Issues & Features
Task Management: The application allows users to add, mark as completed, and delete tasks.

Persistent Data: All tasks are stored in a MongoDB database, so they will persist even if you close and reopen the application.

Loading State: The app displays a "Loading tasks..." message while fetching data from the backend.

Known Issue: Currently, the application is configured to connect to a local backend server (http://localhost:5001). If the backend is not running or is on a different port, the frontend will not be able to fetch tasks.


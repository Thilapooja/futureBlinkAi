# Future Blink AI

A full-stack AI-powered web application that allows users to visually interact with an AI model using a flow-based interface.


##  Features

*  Visual workflow using React Flow (Input → Output nodes)
*  AI integration using OpenRouter 
*  Real-time response display
*  Save prompts & responses to MongoDB
*  View chat history
*  Dark / Light theme toggle 
*  Modern UI with gradient background
*  Scrollable response box for long outputs


## Tech Stack:

### Frontend

* React (Vite)
* React Flow
* Axios
* CSS 

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)

### AI Integration

* OpenRouter API 

##  API Endpoints

*The backend exposes RESTful APIs to handle AI requests, data storage, and retrieval. 
*PI responses have been tested in Postman.



###  POST (/api/ask-ai)
Description:
Sends a user prompt to the AI model and returns the generated response.
This endpoint acts as a bridge between the frontend and the AI service. 
It securely sends user input to the AI model and returns the generated output.



###  POST (/api/save)
Description:
Stores the user prompt and AI response in the database.
This endpoint enables data persistence by saving user interactions into the database for future reference.


###  GET (/api/history)
Description:
Retrieves all previously saved prompts and responses.
This endpoint fetches stored data from the database and returns it in descending order (latest first), enabling features like chat history.



##  API Workflow

1. User enters a prompt in the frontend
2. `POST /api/ask-ai` sends the prompt to the backend
3. Backend communicates with the AI model and returns a response
4. `POST /api/save` stores the interaction in MongoDB
5. `GET /api/history` retrieves saved interactions for display


##  How It Works

1. User enters a prompt in the input node
2. Clicks **Run Flow**
3. Frontend sends request to backend
4. Backend calls OpenRouter AI API
5. Response is returned and displayed
6. User can save results to MongoDB
7. History can be viewed anytime


##  UI Highlights

* Clean node-based interface
* ChatGPT-style input & output cards
* Gradient/dark theme UI
* Scrollable response container


##  Key Learnings

* Full-stack integration (React + Node.js + MongoDB)
* API handling and async workflows
* State management in React
* UI improvements and theming
* Secure API usage via backend

##  Deployment 

I have deployed the entire working application in Vercel.
Here is the link:
https://futureblinkaitask-git-main-thila-pooja-k-projects.vercel.app/

# React Redux WebSocket TypeScript App

Welcome to the React Redux WebSocket TypeScript App! This repository contains a robust React application featuring Redux state management, WebSocket integration, TypeScript implementation, and additional features for handling API calls.

## Features

### Task 1: React Component Development

1. **PostList Component:**
   - Fetches a list of posts from an API endpoint.
   - Displays posts in a table with columns for ID, Name, and Email.

2. **PostDetails Component:**
   - Displays the details of a selected post.
   - Clicking on a post in the PostList updates and displays the details in this component.

### Task 2: Redux State Management

1. **Redux Store:**
   - Manages the selected post's data in the PostDetails component.
   - Stores selected post information (ID, Name, Email) in the Redux store.

2. **Actions and Reducers:**
   - Updates the selected post's data in the store when a post is clicked in the PostList.

### Task 3: WebSocket Integration

1. **WebSocket Connection:**
   - Establishes a connection with a real-time server (echo server for testing purposes).
   - Displays real-time messages received from the WebSocket connection in the ChatBox component.

### Task 4: API Calls

1. **PostList API Calls:**
   - Implements API calls in the PostList component to fetch a list of posts from a REST API endpoint.
   - Handles loading and error states gracefully during API calls.


## Getting Started

Follow these steps to get the application up and running:

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
Install Dependencies:

Navigate to the server directory and run:

cd server
npm install

Navigate to the client directory and run:

npm install

Start the Server:

In the server directory, run:

npm start

Start the Client:

npm start

Open the Application:

Open your browser and navigate to http://localhost:3000.
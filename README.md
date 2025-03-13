# To-Do List App

This is a simple To-Do List application built using React, Firebase, Tailwind CSS, and Docker. The app allows users to manage their tasks efficiently with authentication and real-time updates.

## Features

- User authentication with Firebase
- Add, edit, and delete tasks
- Real-time updates
- Responsive design using Tailwind CSS

## Installation & Setup

To get started with this project, follow these steps:

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/)

### Clone the repository
```sh
git clone https://github.com/yourusername/todolist-app.git
cd todolist-app
```

### Install dependencies
```sh
npm install
```

### Set up Firebase
1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
2. Enable Authentication and Firestore.
3. Create a `.env` file in the project root and add the following:
   ```env
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   ```

### Run the application
#### Option 1: Using npm
```sh
npm run dev
```
The app should now be running at `http://localhost:5173/`.

#### Option 2: Using Docker
1. Build the Docker image:
   ```sh
   docker build -t todolist-app .
   ```
2. Run the container:
   ```sh
   docker run -p 5173:5173 todolist-app
   ```
The app should now be accessible at `http://localhost:5173/`.

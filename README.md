# Travel Agency Website

This is a full-stack travel agency website built with React for the frontend and Node.js/Express for the backend. It provides an intuitive platform for booking various travel services, exploring popular destinations, and viewing customer testimonials.

## Features

- **Frontend**:

  - Built with React and Vite for fast development.
  - Displays popular travel destinations and services.
  - Fetches data for destinations and testimonials from the backend.
  - TailwindCSS for styling and responsive design.

- **Backend**:
  - Express-based API server.
  - Provides endpoints to fetch popular destinations and testimonials.

## Current Status

Please note that the following features are still under development:

- **Login & Logout Functionality**: The user authentication system is not yet implemented. Users cannot log in or log out at this time.

- **Contact Form**: The contact form is not yet functional. Users cannot submit inquiries or feedback through the website.

- **API Handling**: The API endpoints for fetching destinations and testimonials are in place, but error handling and validation are not yet fully implemented. Users may encounter issues when interacting with these features.

## Getting Started

### Prerequisites

Ensure you have the following tools installed on your machine:

- **Node.js**
- **npm**
- **git**

### Setup

#### 1. Clone the Repository

```bash
git clone https://github.com/MohammedAbi/Travel-Agency-fullstack.git

cd frontend
```

#### 2. Install Frontend Dependencies

- In the frontend directory, run the following command:

```bash
npm install
```

#### 3. Install Backend Dependencies

- In the backend directory (backend), run the following command:

```bash
npm install
```

#### Configuration

## Frontend:

The frontend is configured to proxy requests to the backend API running on http://localhost:8080. You can modify this in the package.json of the frontend.

## Backend:

The backend API runs on port 8080 by default. Ensure that the backend is running before the frontend to ensure data is fetched correctly.

#### Running the Application

1. Start the Backend API
   - In the backend directory, run the following command:

```bash
npm run dev
```

This will start the backend server using nodemon for hot-reloading.

2. Start the Frontend API
   - In the frontend directory, run the following command:

```bash
npm run dev
```

This will start the Vite development server and open the frontend application in your browser.

#### API Endpoints

The backend exposes the following API endpoints:

- GET /api/destinations: Returns a list of popular destinations, including their images, titles, and descriptions.
- GET /api/testimonials: Returns a list of customer testimonials.

#### Example Requests

- Destinations: The frontend fetches data from http://localhost:8080/api/destinations to display popular destinations.
- Testimonials: The frontend fetches data from http://localhost:8080/api/testimonials to display customer feedback.

## Credits

This project was inspired by the tutorial "Build a Stunning Responsive Travel Agency Website with React & Tailwind CSS" by Code With Yousaf. You can watch the tutorial here:

[Build a Stunning Responsive Travel Agency Website with React & Tailwind CSS](https://www.youtube.com/watch?v=NZ2EvBRb99o)

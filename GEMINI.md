
# PrismBridge Project Documentation

This document provides a comprehensive overview of the PrismBridge project, intended to guide developers and contributors.

## Project Overview

PrismBridge is a full-stack Node.js application designed for investment management. It features user authentication, an admin dashboard for user and portfolio management, and a user-facing dashboard for managing investments, viewing transaction history, and updating profiles. The application is built with Express.js, uses MongoDB as its database, and EJS for its view engine.

## Technologies

- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **View Engine:** EJS
- **Authentication:** JSON Web Tokens (JWT), bcryptjs
- **Middleware:** cookie-parser, body-parser, morgan
- **Development:** nodemon, Jest for testing

## Project Structure

The project is organized into the following key directories:

- **`app.js`**: The main entry point of the application. It initializes the Express app, connects to MongoDB, sets up middleware, and defines the main routes.
- **`config/`**: Contains configuration files for the database (`db.config.js`), authentication (`auth.config.js`), and email notifications (`nodemailer.config.js`).
- **`controllers/`**: Holds the application's logic, separated into controllers for different modules:
    - `adminController.js`: Manages the admin dashboard, including user creation, deletion, and portfolio management.
    - `authController.js`: Handles user authentication, including sign-up, login, logout, and password changes.
    - `basicController.js`: Manages the basic routes of the application, such as the home, contact, and policy pages.
    - `supportController.js`: Manages the customer support dashboard.
    - `userController.js`: Manages the user dashboard, including profile updates, funding, and investment management.
- **`middleware/`**: Contains custom middleware for the application, such as `authMiddleware.js` for protecting routes and checking user authentication.
- **`model/`**: Defines the Mongoose schemas for the application's data models, organized into `AdminModels/` and `UserModels/`.
- **`public/`**: Contains static assets for the application, including CSS, JavaScript, images, and fonts.
- **`routes/`**: Defines the application's routes, separated into different files for each module:
    - `adminRoutes.js`: Routes for the admin dashboard.
    - `authRoutes.js`: Routes for user authentication.
    - `basicRoutes.js`: Basic application routes.
    - `supportRoutes.js`: Routes for the customer support dashboard.
    - `userRoutes.js`: Routes for the user dashboard.
- **`views/`**: Contains the EJS templates for the application's UI, organized into `admin/`, `partials/`, and `user/` directories.

## Getting Started

To run the project locally, follow these steps:

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Set up environment variables:**
   Create a `.env` file in the root directory and add the following variables:
   ```
   MONGODB_URI=<your_mongodb_uri>
   PORT=4000
   ```
3. **Run the application:**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:4000`.

## Testing

The project uses Jest for testing. To run the tests, use the following command:
```bash
npm test
```

## Key Conventions

- **Routing:** Routes are defined in the `routes/` directory and are separated by module. Each route file is responsible for a specific part of the application.
- **Controllers:** Controllers are responsible for handling the logic of each route. They are located in the `controllers/` directory and are named according to the module they belong to.
- **Models:** Mongoose schemas are defined in the `model/` directory and are organized into subdirectories for admin and user models.
- **Views:** EJS templates are used for the application's UI and are located in the `views/` directory. Partials are used for reusable components.
- **Authentication:** User authentication is handled using JWTs. The `authMiddleware.js` file contains middleware for protecting routes and checking user authentication.
- **Error Handling:** The application uses a custom 404 route to handle invalid requests.

This documentation provides a high-level overview of the PrismBridge project. For more detailed information, please refer to the source code and comments.

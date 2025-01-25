# Express MVC Boilerplate with MongoDB, Authentication, and JWT

A basic Express.js boilerplate project using the MVC (Model-View-Controller) architecture. This project includes MongoDB Atlas integration and features a secure user authentication system with **bcrypt** for password hashing and **JWT (JSON Web Tokens)** for authentication.

## Features

- 🛠️ **MVC Architecture**: Clean separation of concerns for scalability and maintainability.
- 🌐 **MongoDB Atlas Integration**: Connect your application to MongoDB Atlas for seamless database management.
- 🔒 **Authentication System**: Includes user signup and login functionality.
- 🔑 **Password Security**: Secure password storage using bcrypt hashing.
- 🛡️ **JWT Authentication**: Authenticate and authorize users with JSON Web Tokens.
- 📦 **Environment Variables**: Easily configurable via `.env` file.
- 💡 **Scalable Boilerplate**: Ready to extend for larger projects.

---

## Installation

Follow these steps to set up the project on your local system:

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory and add the following variables:
```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key
```

### 4. Run the Server
Start the development server:
```bash
npm run dev
```
The server will run on `http://localhost:5000`.

---

## Project Structure

```plaintext
├── controllers/          # Business logic (e.g., auth, user handling)
├── models/               # Mongoose schemas for MongoDB
├── routes/               # API routes for different functionalities
├── middlewares/          # Custom middleware (e.g., auth validation)
├── config/               # Database connection and other configurations
├── utils/                # Helper functions and utilities
├── views/                # For integrating templating engines (if needed)
├── .env                  # Environment variables
├── app.js                # Main application entry point
├── package.json          # Dependencies and scripts
└── README.md             # Project documentation
```

---

## API Endpoints

### Authentication
- **POST /api/auth/signup**
  - Registers a new user.
  - Request Body:
    ```json
    {
      "name": "John Doe",
      "email": "john@example.com",
      "password": "yourpassword"
    }
    ```
  - Response: JSON object with a success message.

- **POST /api/auth/login**
  - Logs in a user and returns a JWT token.
  - Request Body:
    ```json
    {
      "email": "john@example.com",
      "password": "yourpassword"
    }
    ```
  - Response: JSON object with the JWT token.

### Protected Routes
- Use the `Authorization` header with the format `Bearer <JWT>` to access protected routes.

---

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (MongoDB Atlas)
- **Authentication**: bcrypt, JWT
- **Environment Management**: dotenv

---

## How to Contribute

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

---

## Acknowledgments

- **bcrypt** for secure password hashing.
- **jsonwebtoken (JWT)** for robust authentication.
- **MongoDB Atlas** for cloud database hosting.

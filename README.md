# 🚀 Propel – Project Management Backend

**Propel** is a backend application designed to simplify project management, task organization, and team collaboration. It provides a RESTful API architecture that enables users to create and manage projects, assign tasks, collaborate with team members, and track project progress.

## ✨ Features

- **Authentication & Authorization** – Secure user registration and login using JWT.
- **User Management** – Manage user accounts and profiles.
- **Project Management** – Create, update, retrieve, and delete projects.
- **Task Management** – Create tasks, assign responsibilities, and manage task statuses.
- **Team Collaboration** – Support collaborative project workflows.
- **Secure APIs** – Protected routes and authorization mechanisms.
- **Error Handling** – Centralized error handling and structured API responses.

## 🛠️ Tech Stack

| Technology | Purpose            |
| ---------- | ------------------ |
| Node.js    | JavaScript runtime |
| Express.js | Backend framework  |
| MongoDB    | Database           |
| Mongoose   | ODM                |
| JWT        | Authentication     |
| bcrypt     | Password hashing   |
| Postman    | API testing        |

## 📁 Project Structure

```text
04_propel/
├── public/
├── src/
│   ├── controllers/
│   ├── db/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── validators/
│   └── app.js
│   ├── server.js
├── .gitignore
├── .prettierignore
├── .prettierrc
├── package-lock.json
├── package.json
└── README.md
```

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/biman-nandi/Propel.git
cd 04_propel
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory.

```env
PORT=8000
MONGODB_URI=your_mongodb_connection_string
ACCESS_TOKEN_SECRET=your_access_token_secret
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_SECRET=your_refresh_token_secret
REFRESH_TOKEN_EXPIRY=10d
```

### 4. Start the development server

```bash
npm run dev
```

## 🔌 API Documentation

Propel provides RESTful APIs for authentication, user management, and project management.

### 1. Authentication & User APIs

| Method | Endpoint                                            | Description                            | Access    |
| ------ | --------------------------------------------------- | -------------------------------------- | --------- |
| POST   | `/api/v1/users/register`                            | Register a new user                    | Public    |
| POST   | `/api/v1/users/login`                               | Authenticate user and generate tokens  | Public    |
| GET    | `/api/v1/users/verify-email/:verificationToken`     | Verify email address                   | Public    |
| POST   | `/api/v1/users/refresh-token`                       | Generate new access and refresh tokens | Public    |
| POST   | `/api/v1/users/forgot-password`                     | Request password reset email           | Public    |
| POST   | `/api/v1/users/reset-password/:forgotPasswordToken` | Reset account password                 | Public    |
| POST   | `/api/v1/users/logout`                              | Log out the authenticated user         | Protected |
| GET    | `/api/v1/users/current-user`                        | Retrieve authenticated user details    | Protected |
| POST   | `/api/v1/users/resend-email-verification`           | Resend email verification link         | Protected |
| POST   | `/api/v1/users/change-password`                     | Change account password                | Protected |

### 2. Project Management APIs

The project management module is designed to support the following operations:

| Method | Endpoint                      | Description                |
| ------ | ----------------------------- | -------------------------- |
| GET    | `/api/v1/projects`            | Retrieve all projects      |
| GET    | `/api/v1/projects/:projectId` | Retrieve project details   |
| POST   | `/api/v1/projects`            | Create a new project       |
| PATCH  | `/api/v1/projects/:projectId` | Update project information |
| DELETE | `/api/v1/projects/:projectId` | Delete a project           |

_Note: Project endpoints are planned based on the current controller structure and should be documented as implemented once their routes and controller logic are completed._

### 3. API Features

- JWT-based authentication and authorization.
- HTTP-only cookie-based token handling.
- Email verification using temporary tokens.
- Secure password hashing and password management.
- Request validation and centralized error handling.
- Structured API responses and HTTP status codes.

---

## 🎯 Project Objective

**Propel** aims to provide a reliable and scalable backend foundation for modern project management applications.

The project focuses on simplifying project organization, securing user accounts, managing project workflows, and building a structured API architecture that can support team collaboration and efficient task management.

The long-term goal is to create a centralized platform where users can manage projects, organize tasks, and collaborate efficiently through a secure and scalable system.

## 👨‍💻 Author

**Biman Nandi**

Electronics & Telecommunication Engineering Student

[GitHub Profile](https://github.com/biman-nandi)

---

⭐ If you find this project useful, consider giving it a star!

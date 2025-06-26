# 📘 PostgreSQL CRUD API with Express.js

This project is a well-structured RESTful API built with **Express.js** and **PostgreSQL**, featuring modular code organization, validation using **Joi**, error handling middleware, and environment configuration with `.env`.

---

## 🚀 Features

- ✅ Full CRUD operations (`Create`, `Read`, `Update`, `Delete`)
- ✅ PostgreSQL integration using `pg`
- ✅ Schema-based request validation with Joi
- ✅ Centralized error handling
- ✅ Environment variable management via `dotenv`
- ✅ Clean modular code structure for scalability

---

## 📂 Project Structure

postgres-api/
├── controllers/
│ └── usersController.js
├── db/
│ └── index.js
├── middleware/
│ └── errorHandler.js
├── routes/
│ └── users.js
├── validators/
│ └── userValidator.js
├── .env
├── .gitignore
├── README.md
├── server.js
└── package.json


---

## ⚙️ Setup Instructions

### 1. 📦 Prerequisites

- PostgreSQL installed & running
- Node.js and npm installed

---

### 2. 🧱 Create the Database & Table

Open pgAdmin or use `psql` CLI to run:

```sql
CREATE DATABASE mini_project_db;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  age INTEGER
);

Create a .env file in your root directory:
PGHOST=localhost
PGUSER=postgres
PGPASSWORD=your_postgres_password
PGDATABASE=mini_project_db
PGPORT=5432

install dependencies
npm install

start server
node server.js

server runs at
http://localhost:3000

🔌 API Endpoints
| Method | Endpoint     | Description          |
| ------ | ------------ | -------------------- |
| GET    | `/users`     | Fetch all users      |
| GET    | `/users/:id` | Get user by ID       |
| POST   | `/users`     | Create a new user    |
| PUT    | `/users/:id` | Update existing user |
| DELETE | `/users/:id` | Delete a user        |

invalid put example
{
  "name": "",
  "email": "not-an-email",
  "age": -2
}

response
{
  "error": "\"name\" is not allowed to be empty"
}


---

## ✅ What To Do Now:

1. Open your project folder.
2. Open `README.md` file.
3. Replace its content with the text above.
4. Save the file.

Then we’ll **push all your changes to GitHub** and get your repo ready for review. Let me know once done and we’ll move to the final step 🚀.



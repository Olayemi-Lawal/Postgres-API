# PostgreSQL CRUD API with Express.js

This project is a simple RESTful API built with Express.js and PostgreSQL.

## 📦 Setup

1. Install PostgreSQL and create a database named `mini_project_db`
2. Run the SQL to create the `users` table:
```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  age INTEGER
);
```
3. Add your DB credentials in the `.env` file
4. Install dependencies:
```bash
npm install
```
5. Run the server:
```bash
node server.js
```

## 🔌 API Endpoints

- `GET /users` - Get all users
- `GET /users/:id` - Get a user by ID
- `POST /users` - Create a user
- `PUT /users/:id` - Update a user
- `DELETE /users/:id` - Delete a user

## Postman Collection

You can import the included [Postman Collection](./postgres-api.postman_collection.json) to test all endpoints easily.

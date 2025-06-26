# 🚀 PostgreSQL CRUD API with Express.js

This project is a simple RESTful API built with **Express.js** and **PostgreSQL**. It supports full CRUD operations on a `users` table.

---

## 📦 Setup Instructions

### 1. Install PostgreSQL and Create the Database

- Create a database named: `mini_project_db`

- Then run this SQL command to create the `users` table:

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  age INTEGER
);

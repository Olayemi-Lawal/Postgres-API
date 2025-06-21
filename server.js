require('dotenv').config();
const express = require('express');
const app = express();
const usersRoutes = require('./routes/users');
app.use(express.json());

app.use('/users', usersRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to PostgreSQL + Express API!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
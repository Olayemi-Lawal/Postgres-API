require('dotenv').config();
const express = require('express');
const app = express();
const usersRoutes = require('./routes/users');
const errorHandler = require('./middleware/errorHandler'); // ✅ Move import up

app.use(express.json());

// Routes
app.use('/users', usersRoutes);

// Default welcome route
app.get('/', (req, res) => {
  res.send('Welcome to PostgreSQL + Express API!');
});

// 404 handler for unknown routes
app.use((req, res, next) => {
  res.status(404).json({ error: 'Route not found' });
});

// Global error handler (always last)
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


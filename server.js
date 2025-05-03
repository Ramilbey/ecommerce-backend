// index.js
const express = require('express');
const app = express();
const apiRoutes = require('./routes/api');

// Middleware
app.use(express.json()); // to parse JSON bodies

// Routes
app.use('/api', apiRoutes);

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to the Node.js + Express.js API!');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

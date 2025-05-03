import express from 'express';
import apiRoutes from './routes/api.js';

const app = express();

app.use(express.json()); // Middleware to parse JSON

// Routes
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Node.js + Express.js API!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


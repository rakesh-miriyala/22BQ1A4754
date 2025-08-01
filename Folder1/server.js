const express = require('express');
const cors = require('cors');
const logger = require('./middleware/logger');
const shortenerRoutes = require('./routes/shortener');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(logger); // custom logging middleware

// Routes
app.use('/api', shortenerRoutes);

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something broke!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

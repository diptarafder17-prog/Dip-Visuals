// Simple Node.js + Express server
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (like index.html)
app.use(express.static(__dirname));

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Dip Portfolio API!' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

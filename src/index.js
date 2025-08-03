const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (_req, res) => {
  res.send('<h1>Hello from GitHub CI/CD via Portainer Yo! This is testing an update 🚀</h1>');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


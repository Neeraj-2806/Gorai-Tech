const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const apiRoutes = require('./backend/routes');

app.use(bodyParser.json());
app.use('/api', apiRoutes);

// Serve static files from frontend
app.use(express.static('frontend'));

const PORT = 3000;
const HOST = '0.0.0.0'; // Listen on all network interfaces for Docker

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});

const express = require('express');
const app = express();
const port = 3000;

// Import route modules
const apiRouter = require('./routes/api');
const pageRouter = require('./routes/page');

// Use route modules
app.use('/api', apiRouter);
app.use('/', pageRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});






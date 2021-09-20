const mongoose = require('mongoose');
const express = require('express');
const http = require('http');
const helmet = require('helmet');

const routes = require('./routes');

const app = express();

const PORT = process.env.PORT || 3333;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost/exchange';

const startServer = () => {
  const server = http.createServer(app);
  server.listen(PORT, () => {
    console.log(`==== Server started on port ${PORT} =====`);
  });
};

const startExpressApp = () => {
  app.use(helmet());
  app.use(express.json());

  routes(app);

  startServer();
};

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Database successfully connected');
    startExpressApp();
  })
  .catch((err) => {
    console.error('------- MONGODB CONNECTION FAILED ----------');
    console.error(err);

    mongoose.disconnect();
  });

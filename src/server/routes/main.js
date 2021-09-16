const express = require('express');

const router = express.Router();

module.exports = function () {
  router.get('/', (req, res) => {
    res.status(200).json({
      name: 'Stepan',
      age: 25,
      job: 'Developer',
    });
  });
  return router;
};

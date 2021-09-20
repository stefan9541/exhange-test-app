const express = require('express');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const UserModel = require('../models/user');
const Post = require('../validation-schemes/user-schema');

const router = express.Router();

module.exports = function () {
  router.post('/register', Post, (req, res) => {
    // const post = new Post(req.body);
    const err = validationResult(req);
    if (!err.isEmpty()) {
      return res.status(404).json({ errors: err.mapped() });
    }

    UserModel.create({

    });
  });
  return router;
};

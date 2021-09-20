const express = require('express');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const UserModel = require('../models/user');
const userRegisterValidationSchema = require('../validation-schemes/user-schema');

const router = express.Router();

module.exports = function () {
  router.post('/register', userRegisterValidationSchema, async (req, res) => {
    // const post = new Post(req.body);
    const { password, email } = req.body;
    const err = validationResult(req);
    if (!err.isEmpty()) {
      return res.status(400).json({ errors: err.mapped() });
    }

    try {
      const getSalt = await bcrypt.genSalt();
      const generateHashPassword = await bcrypt.hash(password, getSalt);
      await UserModel.create({
        email,
        password: generateHashPassword,
      });
      return res.sendStatus(200);
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: error.message || 'Something went wrong, please try again later',
      });
    }
  });
  return router;
};

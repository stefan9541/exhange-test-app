const { check } = require('express-validator');

module.exports = [
  check('password')
    .isString()
    .withMessage('Should be String')
    .isLength({ min: 5 })
    .withMessage('should be greater than 5'),
  check('email')
    .isString()
    .withMessage('Should be String')
    .isEmail()
    .withMessage('invalid email'),
];

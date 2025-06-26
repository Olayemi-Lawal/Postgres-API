const Joi = require('joi');

const userSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  email: Joi.string().email().required(),
  age: Joi.number().integer().min(0).max(120).required()
});

module.exports = userSchema;

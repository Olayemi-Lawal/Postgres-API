const Joi = require('joi');

const userSchema = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().email().required(),
  age: Joi.number().integer().min(1).required()
});

module.exports = { userSchema };

import Joi from 'joi';

const validateCompany = (company) => {
  const schema = Joi.object({
    name: Joi.string().required()
      .empty()
      .messages({
        'any.required': 'name is required.',
        'string.empty': 'name cannot be an empty field.',
        'string.base': 'name must be a string.',
      }),
    location: Joi.string().required()
      .empty()
      .messages({
        'any.required': 'location is required.',
        'string.empty': 'location cannot be an empty field.',
        'string.base': 'location must be a string.',
      }),
    ceo: Joi.string().required()
      .empty()
      .messages({
        'any.required': 'ceo is required.',
        'string.empty': 'ceo cannot be an empty field.',
        'string.base': 'ceo must be a string.',
      }),
  }).messages({
    'object.unknown': 'You have used an invalid key.',
  }).options({ abortEarly: true });
  return schema.validate(company);
};

const validatePut = (keys) => {
  const schema = Joi.object({
    name: Joi.string()
      .empty()
      .messages({
        'string.empty': 'name cannot be an empty field.',
        'string.base': 'name must be a string.',
      }),
    location: Joi.string()
      .empty()
      .messages({
        'string.empty': 'location cannot be an empty field.',
        'string.base': 'location must be a string.',
      }),
    ceo: Joi.string()
      .empty()
      .messages({
        'string.empty': 'ceo cannot be an empty field.',
        'string.base': 'ceo must be a string.',
      }),
  }).messages({
    'object.unknown': 'You have used an invalid key.',
  }).options({ abortEarly: true });
  return schema.validate(keys);
};
export { validateCompany, validatePut };

var mongoose = require("mongoose");
const Joi = require("@hapi/joi");
var customerSchema = mongoose.Schema({
  name: String,
  price: Number,
});
var Customer = mongoose.model("Customer", customerSchema);

function validateCustomer(data) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    age: Joi.number().min(0).required(),
  });
  return schema.validate(data, { abortEarly: false });
}
module.exports.Customer = Customer;
module.exports.validate = validateCustomer;

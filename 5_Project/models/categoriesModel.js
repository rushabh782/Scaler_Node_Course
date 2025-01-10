const mongoose = require("mongoose"); //importing mongoose
const Joi = require("joi"); //used for validation

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, minLength: 3, maxLength: 30 },
});

//Creating Category Model
const Category = new mongoose.model("Category", categorySchema);

function validateData(category) {
  const schema = {
    name: Joi.string().min(3).required(),
  };
  return Joi.validate(category, schema);
}

exports.Category = Category;
exports.validate = validateData;

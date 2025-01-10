const mongoose = require("mongoose"); //importing mongoose
const Joi = require("joi"); //used for validation

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true, minLength: 3, maxLength: 30 },

  isEnrolled: {
    type: Boolean,
    default: false,
  },

  Phone: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 25,
  },
});

//Creating Category Model
const Student = new mongoose.model("Student", studentSchema);

function validateData(student) {
  const schema = {
    name: Joi.string().min(3).max(50).required(),
    Phone: Joi.string().min(10).max(50).required(),
    isEnrolled: Joi.boolean(),
  };
  return Joi.validate(student, schema);
}

exports.Student = Student;
exports.validate = validateData;

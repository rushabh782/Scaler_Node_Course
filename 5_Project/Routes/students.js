const express = require("express"); //import express
const mongoose = require("mongoose"); //importing mongoose
const Joi = require("joi"); //used for validation
const router = express.Router();

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

//Route Parameters

router.get("/", async (re, res) => {
  let students = await Student.find();
  res.send(students);
});

//to add new existing courses
router.post("/", async (req, res) => {
  const { error } = validateData(req.body);
  if (error) res.status(400).send(error.details[0].message);
  const student = new Student({
    name: req.body.name,
    isEnrolled: req.body.isEnrolled,
    Phone: req.body.Phone,
  });
  await student.save();
  res.send(student);
});

// //to update the existing categories
router.put("/:id", async (req, res) => {
  const { error } = validateData(req.body);
  if (error) res.status(400).send(error.details[0].message);

  const student = await Student.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      Phone: req.body.Phone,
      isEnrolled: req.body.isEnrolled,
    },
    { new: true }
  );
  if (!student)
    return res.status(404).send("The student with given Id was not found");
  res.send(student);
});

// to delete categories
router.delete("/:id", async (req, res) => {
  const student = await Student.findByIdAndDelete(req.params.id);

  if (!student)
    return res.status(404).send("The student with the given id was not found");

  res.send(student);
});

// to view existing courses
router.get("/:id", (req, res) => {
  const student = Student.findById(req.params.id);

  if (!student)
    return res.status(404).send("The student with the given id was not found");
  res.send(student);
});

function validateData(student) {
  const schema = {
    name: Joi.string().min(3).max(50).required(),
    Phone: Joi.string().min(10).max(50).required(),
    isEnrolled: Joi.boolean(),
  };
  return Joi.validate(student, schema);
}

module.exports = router;

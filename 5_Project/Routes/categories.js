const express = require("express"); //import express
const { Category, validate } = require("../models/categoriesModel");
const router = express.Router();

//Route Parameters

router.get("/", async (re, res) => {
  let categories = await Category.find();
  res.send(categories);
});

//to add new existing courses
router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) res.status(400).send(error.details[0].message);
  const category = new Category({
    name: req.body.name,
  });
  await category.save();
  res.send(category);
});

// //to update the existing categories
router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) res.status(400).send(error.details[0].message);

  const category = await Category.findByIdAndUpdate(
    req.params.id,
    { name: req.body.name },
    { new: true }
  );
  if (!category)
    return res.status(404).send("The category with given Id was not found");
  res.send(category);
});

// to delete categories
router.delete("/:id", async (req, res) => {
  const category = await Category.findByIdAndDelete(req.params.id);

  if (!category)
    return res.status(404).send("The category with the given id was not found");

  res.send(category);
});

// to view existing courses
router.get("/:id", (req, res) => {
  const category = Category.findById(req.params.id);

  if (!category)
    return res.status(404).send("The category with the given id was not found");
  res.send(category);
});

module.exports = router;

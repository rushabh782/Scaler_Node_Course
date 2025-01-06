const mongoose = require("mongoose"); //importing mongoose

mongoose
  .connect("mongodb://127.0.0.1/testDatabase")
  .then(() => console.log("Connection is successfull"))
  .catch((err) => console.error("Couldnt connect to MongoDB", err));

//Schema
const courseSchema = new mongoose.Schema({
  name: { type: String, required: true, minLength: 5, maxLength: 200 },

  tags: {
    type: Array,
    validate: {
      validator: function (tags) {
        return tags.length > 1;
      },
    },
  },

  category: {
    type: String,
    required: true,
    enum: ["DSA", "Web", "Mobile", "Data Science"],
  },
  creator: { type: String, required: true },
  publishedDate: { type: Date, default: Date.now },
  isPublished: { type: String, required: true },
  rating: {
    type: Number,
    required: function () {
      return this.isPublished;
    },
  },
});

//creating model
const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
  const course = new Course({
    name: "MongoDB",
    tags: ["express", "mongodb"],
    category: "Mobile",
    creator: "Adam",
    isPublished: true,
    rating: 4.7,
  });

  try {
    // await course.validate();
    const result = await course.save();
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
} //Creating

createCourse();

//Comparision Query Operators
//eq (equal)
//gt (greater than)
//gte (greater than and equal to)
//lt (less than)
//lte (less than and equal to)
//in
//not in

//Reading
async function getCourses() {
  //Using the course model
  const courses = await Course.find({ rating: { $in: [3, 4.0, 4.5] } })
    .select({
      name: 1,
      publishedDate: 1,
    })
    .or([{ creator: "Mrinal" }, { rating: 2 }]);

  console.log(courses);
} //Reading

// getCourses();

//Updating

async function updateCourse(id) {
  let course = await Course.findById(id);

  if (!course) return;

  course.name = "Python";

  course.creator = "Steve";

  const updatedCourse = await course.save();

  console.log(updatedCourse);
} //Updating

// updateCourse("6778d543d9f3056430b15605");

//Deleting

async function deleteCourse(id) {
  let course = await Course.findByIdAndDelete(id);

  console.log(course);
}

// deleteCourse("6778d55623ee080c7a1419f5");

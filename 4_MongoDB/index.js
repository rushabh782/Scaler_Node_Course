const mongoose = require("mongoose"); //importing mongoose

mongoose
  .connect("mongodb://127.0.0.1/testDatabase")
  .then(() => console.log("Connection is successfull"))
  .catch((err) => console.error("Couldnt connect to MongoDB", err));

//Schema
const courseSchema = new mongoose.Schema({
  name: String,
  creator: String,
  publishedDate: { type: Date, default: Date.now },
  isPublished: Boolean,
  rating: Number,
});

//creating model
const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
  const course = new Course({
    name: "C++",
    creator: "Raj",
    rating: 3.0,
    isPublished: true,
  });

  const result = await course.save();
  console.log(result);
} //Creating

// createCourse();

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

deleteCourse("6778d55623ee080c7a1419f5");

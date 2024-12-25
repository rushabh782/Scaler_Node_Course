const express = require("express"); //imported express package

const app = express();

//get , post, put, delete

app.use(express.json());

const courses = [
  { id: 1, name: "Javascript" },
  { id: 2, name: "Java" },
  { id: 3, name: "Python" },
];

app.get("/", (req, res) => {
  res.send("Hello from Scaler Topics");
});

app.get("/about", (req, res) => {
  res.send("We create Impact");
});

app.get("/contact", (req, res) => {
  res.send("Contact Us at abcd@abcd.com");
});

app.get("/courses", (req, res) => {
  res.send(courses);
}); //read

app.post("/courses", (req, res) => {
  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
}); //create

//Put method - update already existing entries
app.put("/courses/:coursename", (req, res) => {
  let course = courses.find((course) => course.name === req.params.coursename);
  if (!course)
    res.status(404).send("The course you are looking for does not exist");

  course.name = req.params.name;
  res.send(course);
}); //update

// app.delete("/courses/:coursename", (req, res) => {
//   let UpdatedCourses = courses.filter(
//     (course) => course.name !== req.params.coursename
//   );

//   courses = UpdatedCourses;

//   res.send(courses);
// });

app.delete("/courses/:id", (req, res) => {
  let course = courses.find((course) => course.id === parseInt(req.params.id));
  if (!course)
    res.status(404).send("The course you are looking for does not exist");

  const index = courses.indexOf(course);

  courses.splice(index, 1);
  res.send(course);
});

//Route Parameters
app.get("/courses/:coursename", (req, res) => {
  console.log(req.params.coursename);
  let course = courses.find((course) => course.name === req.params.coursename);

  if (!course)
    res.status(404).send("The course you are looking for does not exist");
  res.send(course);
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Port is running on ${port}`);
});

const fs = require("fs"); //importing file system module

console.log("First Line");

// let data = fs.readFileSync("f1.txt");

// console.log("File 1 Data ->" + data);

// let data2 = fs.readFileSync("f2.txt");

// console.log("File 2 Data ->" + data2);

fs.readFile("f1.txt", cb1);

function cb1(err, data) {
  if (err) {
    console.log(err);
  }

  console.log("File 1 Data -> " + data);
  fs.readFile("f2.txt", cb2); //serial execution of async code
}

function cb2(err, data) {
  if (err) {
    console.log(err);
  }

  console.log("File 2 Data -> " + data);
  fs.readFile("f3.txt", cb3);
}

function cb3(err, data) {
  if (err) {
    console.log(err);
  }

  console.log("File 3 Data -> " + data);
}

console.log("Last Line");

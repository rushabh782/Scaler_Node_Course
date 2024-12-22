//files

const fs = require("fs");

//reading a file

// let fileContent = fs.readFileSync("f1.txt");

// console.log("data of file 1 ->" + fileContent);

// //writing in a file
// fs.writeFileSync("2.txt", "This is file2");

// console.log("File has been written");

// //append a file
// fs.appendFileSync("f3.txt", "This is updated data");

// console.log("File has been appended");

// //deleting a file
// fs.unlinkSync("f2.txt");

// console.log("file has been deleted");

//Directories

//create a Directory

// fs.mkdirSync("myDirectory");

//checking content inside the directory
// let folderPath =
//   "C:\\Users\\rushabh\\OneDrive\\Desktop\\Ultimate Node.js Course\\myDirectory";

// let folderContent = fs.readdirSync(folderPath);

// console.log("Folder Content", folderContent);

//check whether directory exists or not

// let doesExist = fs.existsSync("myDirectory");

// console.log(doesExist);

//remove directory
fs.rmdirSync("myDirectory");

console.log("dir has been deleted");

const path = require("path"); //imported path module

let ext = path.extname(
  "C:Users\rushabhOneDriveDesktopUltimate Node.js Course\f1.txt"
);

let baseName = path.basename(
  "C:Users\\rushabhOneDriveDesktopUltimate Node.js Course\\f1.txt"
);

console.log(baseName);
console.log(ext);
console.log(__filename);
console.log(__dirname);

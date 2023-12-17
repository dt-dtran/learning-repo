//os
const os = require("os");
console.log(os.platform(), os.homedir());

//file system
const fs = require("fs");

//read files (async)
fs.readFile("pathoftextfile", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data); // return Buffer
  console.log(data.toString()); // return the txt.
}); //<-- add path in ('')

//write files

//async
fs.writeFile("pathoftextfile", "text to replace", () => {
  console.log("file was written");
});

//directories
//Check if Directory Exist: fs.existSync is sync
if (!fs.existsSync("./assets")) {
  // Add Directionary: fs.mkdir is async
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder created");
  });
} else {
  // Remove Directory: fs.rmdir is async
  fs.rmdir("./asset", () => {
    if (err) {
      console.log(err);
    }
    console.log("folder deleted");
  });
}

//deleting files
if (fs.existsSync("pathtotxt")) {
  // Delete file: unlink is async
  fs.unlink("pathtotext", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file deleted");
  });
}

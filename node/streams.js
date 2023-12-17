// Streams allows us to start using data before it finished loading. Buffer is a small chunck of data that is pass a bit at a time through a stream.

const fs = require("fs");

// Read Stream: Reads data from file
const readStream = fs.createReadStream("./docs/sample.txt", {
  encoding: "utf8",
});

// Write Stream: sends data to write to new file
const writeStream = fs.createWriteStream("./docs/sample1.txt");

// data event listener
// readStream.on("data", (chunk) => {
//   console.log("--- NEW CHUNK ---");
//   console.log(chunk);
//   writeStream.write("\nNEW CHUNK\n");
//   writeStream.write(chunk);
// });

// Pipe (shortway of above). Pipe must be from a readable stream to a writable stream
readStream.pipe(writeStream);

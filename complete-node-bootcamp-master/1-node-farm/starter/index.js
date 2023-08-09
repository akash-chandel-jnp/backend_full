const { isUtf8 } = require("buffer");
const { error } = require("console");
const fs = require("fs");

// How to read from a file
// const text_input = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(text_input);

// How to write into a file :
// const text_to_write = `This is what we know about avacado : \n${text_input}`;
// fs.writeFileSync("./txt/output.txt", text_to_write);

// the above function will create an output.txt file if not already there and write the text stored into the variable 'text_to_write'.

// ////////////////////////////////////////////////////////////////////////////////////////////////

//  ----------------------- ASYNCHRONOUS and NonBlocking way ----------------------------------------//
// fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
//   console.log(data);
// });
// console.log("will read file");

///////////////////////////////////////////////////////////////////////////////////

// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   fs.readFile(`./txt/${data1}.txt`, `utf-8`, (err, data2) => {
//     console.log(data2);
//   });
// });
// console.log("will read file !");

fs.readFile("./txt/start.txt", "utf-8", (err, data4) => {
  console.log("calling 2nd callback\n");
  fs.readFile(`./txt/${data4}.txt`, "utf-8", (err, data5) => {
    console.log("hello : " + data5);
  });
});
console.log("will read file");

const { isUtf8 } = require("buffer");
const { error } = require("console");
const fs = require("fs");
const http = require("http");
const url = require("url");

//////////////////////////////////////////////////////////////////////////
// FILES

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

// fs.readFile("./txt/start.txt", "utf-8", (err, data4) => {
//   console.log("calling 2nd callback\n");
//   fs.readFile(`./txt/${data4}.txt`, "utf-8", (err, data5) => {
//     console.log("hello : " + data5);
//   });
// });
// console.log("will read file");

// ///////////////////////////////////////////////////////////////////////////////

// creating a new file and copying the data of two files and pasting into one file

// fs.readFile("./txt/input.txt", "utf-8", (err, data7) => {
//   console.log(data7);
//   fs.readFile("./txt/append.txt", "utf-8", (err, data8) => {
//     console.log(data8);
//     fs.writeFile(
//       "./txt/final.txt",
//       `${data7} \n \n${data8}`,
//       "utf-8",
//       (err) => {
//         console.log("both data has been merged into a single file.");
//       }
//     );
//   });
// });

////////////////////////////////////////////////////////////////////////////

// ------------------------------- SERVER ------------------------
//creating server
// const server = http.createServer((req, res) => {
//   console.log(req);
//   res.end("Hello from the server");
// });

// // starting server at local host(127.0.0.1) and at port 8000;
// // and then adding listener to it
// server.listen(8000, "127.0.0.1", () => {
//   console.log("Listening to requests on the port 8000.");
// });

//////////////////////////////////////////////////////////////////////////////

//  -------------------------- ROUTING ---------------------------

const server = http.createServer((req, res) => {
  console.log(req.url);
  const pathName = req.url;
  if (pathName === "/" || pathName === "/overview") {
    res.end("This is a OVERVIEW response");
  } else if (pathName === "/products") {
    // res.end("This is response from PRODUCTS. ");
    res.end(`<h1>THis is header response for products</h1>`);
  } else if (pathName === "/api") {
    fs.readFile(`${__dirname}/dev-data/data.json`, `utf-8`, (err, data) => {
      const productData = JSON.parse(data);
      // res.end("api will be sent");
      res.writeHead(200, { "content-type": "application/json" });
      res.end(data);
    });
  } else {
    res.writeHead(404, {
      // header code is always sent before response
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("Page not found !");
  }
  // res.end("Hello from the server");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on the port 8000.");
});

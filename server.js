console.log("Starting Web Server");
console.log("This is our 1st project");
// install express -->npm i express     Below: Building Backend Server using Nodejs Framework - Express
const express = require("express");
const app = express();
const http = require("http");

// 1: Entry codes
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session codes

// 3: Views codes        (We selected BSSR-traditional way)  // install ejs -->npm i ejs
app.set("views", "views");
app.set("view engine", "ejs");

// 4: Routing codes
app.get("/hello", function (req, res) {
    res.end(`<h1 style="background: green">Hello World!</h1>`);
});
app.get("/gift", function (req, res) {
    res.end(`<h1 style="background: yellow">You are in page of Gifts!</h1>`);
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`This server is running succesfully on port: ${PORT}`);
});

// install nodemon -->npm i nodemon

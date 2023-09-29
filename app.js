console.log("Starting Web Server");

// install express -->npm i express     Below: Building Backend Server using Nodejs Framework - Express
const express = require("express");
const app = express();

// Connect/call MongoDB
const db = require("./server").db();

// 1: Entry codes
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session codes

// 3: Views codes        (We selected BSSR-traditional way)  // install ejs -->npm i ejs
app.set("views", "views");
app.set("view engine", "ejs");

// 4: Routing codes
app.post("/create-item", (req, res) => {
    console.log(req.body);
    res.json({ test: "success" });
});

app.get("/author", (req, res) => {
    res.render("author", { user: user });
});

app.get("/", function (req, res) {
    res.render("reja");
});

module.exports = app;

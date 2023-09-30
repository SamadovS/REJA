console.log("Starting Web Server");
const express = require("express");
const res = require("express/lib/response");
const app = express();
const http = require("http");
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if (err) {
        console.log("Error:", err);
    } else {
        user = JSON.parse(data);
    }
});

// Assuming you have an array of items
const items = [
    /* your items data */
];

// Render the EJS template and pass the items variable
res.render("reja", { items: items });

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
    console.log("user entered /create-item");
    // console.log(req.body);
    // res.json({ test: "success" });
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
        if (err) {
            console.log(err);
            res.end("something wrong");
        } else {
            res.end("successfully added");
        }
    });
});

app.get("/author", (req, res) => {
    res.render("author", { user: user });
});

app.get("/", function (req, res) {
    console.log("user entered /");
    db.collection("plans")
        .find()
        .toArray((err, data) => {
            if (err) {
                console.log(err);
                res.end("something wrong");
            } else {
                // console.log(data);
                res.render("reja", { items: data });
            }
        });
    res.render("reja");
});

module.exports = app;

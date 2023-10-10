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

// Connect/call MongoDB
const db = require("./server").db();
const mongodb = require("mongodb");

// 1: Entry codes
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session codes

// 3: Views codes        (We selected BSSR-traditional way)  // install ejs -->npm i ejs
app.set("views", "views");
app.set("view engine", "ejs");

// 4: Routing codes

app.post("/delete-item", (req, res) => {
    const id = req.body.id;
    // console.log(id);
    // res.end("done");
    db.collection("plans").deleteOne(
        { _id: new mongodb.ObjectId(id) },
        function (err, data) {
            res.json({ state: "success" });
        }
    );
});

app.post("/edit-item", (req, res) => {
    const data = req.body;
    console.log(data);
    db.collection("plans").findOneAndUpdate(
        { _id: new mongodb.ObjectId(data.id) },
        { $set: { reja: data.new_input } },
        function (err, data) {
            res.json({ state: "success" });
        }
    );
});

app.post("/delete-all", (req, res) => {
    if (req.body.delete_all) {
        db.collection("plans").deleteMany(function () {
            res.json({ state: "deleted all plans" });
        });
    }
});

app.post("/create-item", (req, res) => {
    console.log("User entered /create-item");
    // console.log(req.body);
    // res.json({ test: "Success" });
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
        // console.log(data.ops);
        res.json(data.ops[0]);
    });
});

app.get("/author", (req, res) => {
    res.render("author", { user: user });
});

app.get("/", function (req, res) {
    console.log("User entered /");
    db.collection("plans")
        .find()
        .toArray((err, data) => {
            if (err) {
                console.log(err);
                res.end("Something went wrong");
            } else {
                // console.log(data);
                res.render("reja", { items: data });
            }
        });
});

module.exports = app;

// sam

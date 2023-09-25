// ============================ 16. Express framework and Building Backend Server using Nodejs Framework - Express      ==============
// ============================ +++   17. Building frontend using EJS traditional framework      ===================================
console.log("Starting Web Server");

// install express -->npm i express     Below: Building Backend Server using Nodejs Framework - Express
const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs"); // ==> fs = file system (core module-package, you don't need install it)

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if (err) {
        console.log("ERROR:", err);
    } else {
        user = JSON.parse(data);
    }
});

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
    res.render("harid");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`This server is running succesfully on port: ${PORT}`);
});

// install nodemon -->npm i nodemon

// ====================================   17. Building frontend using EJS traditional framework      ===================================

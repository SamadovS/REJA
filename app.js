console.log("Starting Web Server");
const express = require("express");
const app = express();

// Connect/call MongoDB
const db = require("./server").db();
const mongodb = require("mongodb");

// 1: Entry codes
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session codes

// 3: Views codes

module.exports = app;

// sam

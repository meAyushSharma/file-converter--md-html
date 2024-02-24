#!/usr/bin/env node

import showdown from "showdown";
import express from "express";
import path from "path";

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.post("/submit-md", (req, res) => {
  const userInput = req.body.userInput;
  var converter = new showdown.Converter(),
    text = userInput,
    htmlUn = converter.makeHtml(text);
  console.log(htmlUn);
  res.send(`<h4> Here is you converted string: </h4> <br/>
  <h5> ${htmlUn} </h5>`);
});

app.listen(port, () => console.log(`Server listening on port ${port}`));

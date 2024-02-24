#!/usr/bin/env node

import showdown from "showdown";
import express from "express";
import path from "path";
import {JSDOM} from "jsdom";

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
  var converter = new showdown.Converter({
      tables: true,
      simpleLineBreaks: true,
    }),
    text = userInput,
    htmlUn = converter.makeHtml(text);
  console.log(htmlUn);

  res.send(`<h4> Here is you converted string: </h4> <br/>
  <h5> ${htmlUn} </h5>`);
});

app.post("/submit-html", (req, res) => {
  const userInput = req.body.userInput;
//   const dom = new JSDOM(userInput);
//   var converter = new showdown.Converter({
//     tables: true,
//     simpleLineBreaks: true,
//   }),
//   text = dom,
//   mdUn = converter.makeMarkdown(text);
// console.log(mdUn);
const convertor = new showdown.Converter();
    const dom = new JSDOM(userInput);
    console.log("Parsing HTML");
    const parsedHTML = dom.window.document;
    const markdown = convertor.makeMarkdown(userInput, parsedHTML);
    console.log(markdown);

  res.send(`
  <h4 style="font-family: Trebunchet MS"> Here is you converted string: </h4> 
  <br/>
  <h5> ${markdown} </h5>
  `);
});

app.listen(port, () => console.log(`Server listening on port ${port}`));

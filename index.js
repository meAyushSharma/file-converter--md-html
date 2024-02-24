#!/usr/bin/env node

import showdown from "showdown";
import express from "express";
import path from "path";
import { JSDOM } from "jsdom";
import chalk from "chalk";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
let globalHTML = null;
let globalMD = null;

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname,'public', "index.html"));
});

app.post("/submit-md", (req, res) => {
  const userInput = req.body.userInput;
  var converter = new showdown.Converter({
      tables: true,
      simpleLineBreaks: true,
    }),
    text = userInput,
    htmlUn = converter.makeHtml(text);
  console.log(chalk.bgBlackBright(htmlUn));
  globalHTML = htmlUn;
  res.sendFile(path.join(__dirname, "public", "mdToHtml.html"));
});

app.get("/api/htmldata", (req, res) => {
  res.json({globalHTML});
});



app.post("/submit-html", (req, res) => {
  const userInput = req.body.userInput;

  const convertor = new showdown.Converter();
  const dom = new JSDOM(userInput);
  console.log("Parsing HTML");
  const parsedHTML = dom.window.document;
  const markdown = convertor.makeMarkdown(userInput, parsedHTML);
  console.log(chalk.bgBlackBright(markdown));
  globalMD = markdown;
  res.sendFile(path.join(__dirname, "public", "htmlToMd.html"));
});

app.get("/api/mddata", (req, res) => {
  res.json({globalMD});
});

app.listen(port, () => console.log(`Server listening on port ${port}`));

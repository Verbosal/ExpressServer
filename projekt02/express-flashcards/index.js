import express from "express"; // Express
import {fileURLToPath} from 'url'; // Part 1 of getting the file path
import {dirname} from 'path'; // Part 2 of getting the file path
import bodyParser from 'body-parser'; // Part of handling POST requests

const urlencodedParser = bodyParser.urlencoded({ extended: false }); // Allows for handling POST requests

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = 8000;
const card_categories = ["j. angielski - food", "stolice europejskie"];

const app = express();

// Set the view engine as EJS
app.set("view engine", "ejs");

// Use uhhh public, yeah
app.use(express.static("public"));

// GET method for /cards/categories/ and render
app.get("/cards/categories/", (req, res) => {
  res.render("categories", {
    title: "Kategorie",
    categories: card_categories,
  });
});

// POST method for /cards/categories/ and render with parameters
app.post("/cards/categories/",urlencodedParser, (req, res) => {
  res.render("categories", {
    title: "Kategorie",
    categories: card_categories,
    parameters: req.body
  });

  // if (Object.keys(req.body).length > 0) {
  //   console.log("h");
  //   app.send("Podane parametry używając metody POST:");

  //   for ({key, value} in req.body) {
  //     (`${key} : ${value}`);
  //     console.log(key, value);
  //   }
  // }
});

// Return 404 upon an improper path request
app.use(function(req, res, next) {
  res.status(404);

  if (req.accepts('html')) {
    res.sendFile("/public/404.html", { root: __dirname });
  }
});

// Listen for requests
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
import express from "express"; // Express
import {fileURLToPath} from 'url'; // Part 1 of getting the file path
import {dirname} from 'path'; // Part 2 of getting the file path
import bodyParser from 'body-parser'; // Part of handling POST requests

const urlencodedParser = bodyParser.urlencoded({ extended: true }); // Allows for handling POST requests

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = 8000;
const card_categories = ["j. angielski - food", "stolice europejskie"];

const app = express();

// Set the view engine as EJS
app.set("view engine", "ejs");

// Use uhhh public, yeah
app.use(express.static("public"));

function renderCategories(req, res, parameters) {
  // Render /cards/categories
  res.locals.title = "Kategorie";
  res.locals.categories = card_categories;
  res.locals.parameters = parameters; // Gets set to undefined if using the GET method (or there aren't any POST parameters); doesn't matter, as there's a check in the code in the ejs file.

  res.render("categories");
}

// GET method for /cards/categories/ and then render
app.get("/cards/categories", (req, res) => {
  renderCategories(req, res);
});

// POST method for /cards/categories/ and render with parameters
app.post("/cards/categories/",urlencodedParser, (req, res) => {
  // Add to the cards render optional POST parameters
  renderCategories(req, res, req.body);
});

// Return 404 upon an improper path request
app.use(function(req, res) {
  res.status(404);

  if (req.accepts('html')) {
    res.sendFile("/public/404.html", { root: __dirname });
  }
});

// Listen for requests
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
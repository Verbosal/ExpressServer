import express from "express";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = 8000;
const card_categories = ["j. angielski - food", "stolice europejskie"];

const app = express();

// Set the view engine as EJS
app.set("view engine", "ejs");

// Use uhhh public, yeah
app.use(express.static("public"));

// Render /cards/categories/
function renderCategories(req, res) {
  res.render("categories", {
    title: "Kategorie",
    categories: card_categories,
  });
}

// GET method for /cards/categories/
app.get("/cards/categories/", (req, res) => renderCategories(req, res));

// POST method for /cards/categories/
app.post("/cards/categories/", (req, res) => {
  renderCategories(req, res);

  console.log(req);

  if (req.query.length > 0) {
    app.send("Podane parametry używając metody POST:");

    for (parameter in req.query) {
      app.send(parameter);
    }
  }
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
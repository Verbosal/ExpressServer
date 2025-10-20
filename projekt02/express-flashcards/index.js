import express from "express";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = 8000;
const card_categories = ["j. angielski - food", "stolice europejskie"];

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/index.html", (req, res) => {
  console.log(req);
  console.log(res);
});

app.get("/cards/categories/", (req, res) => {
  res.render("categories", {
    title: "Kategorie",
    categories: card_categories,
  });
});

app.use(function(req, res, next) {
  res.status(404);

  if (req.accepts('html')) {
    res.sendFile("/public/404.html", { root: __dirname });
  }
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
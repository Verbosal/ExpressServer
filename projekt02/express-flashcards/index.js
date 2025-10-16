import express from "express";

const port = 8000;

const app = express(); // Tworzymy obiekt aplikacji/serwera Express

app.get("/", (req, res) => { // Definiujemy handler dla metody GET ścieżki "/"
  res.set("Content-Type", "text/plain"); // Zwracamy czysty tekst
  res.send("Hello world"); // Wysyłamy tekst hello world
});

app.listen(port, () => { // Startujemy serwer na porcie 8000
  console.log(`Server listening on http://localhost:${port}`);
});
# ExpressServer

Running:
```
node index.js
```
On index.js in projekt02/express-flashcards/index.js runs a local server hosted at localhost:8000 (Same as 127.0.0.1:8000).<br><br>
You can then explore to find /cards/categories.ejs<br><br>
The server handles inappriopriate path requests, along with illegal method combinations, and returns a 404 page<br><br><br>
index.ejs and /cards/categories.ejs can both handle GET, but only /cards/categories.ejs can handle POST, so it's as follows:<br>
- index.ejs + GET<br>
- /cards/categories + GET<br>
- /cards/categories + POST<br>
<br><br>
The web app is a modular EJS application, configurable using index.js<br><br> 
The contents are in Polish.<br><br>
Have fun
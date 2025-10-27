# ExpressServer

Running:
```
node index.js
```
On index.js in projekt02/express-flashcards/index.js runs a local server hosted at localhost:8000 (Same as 127.0.0.1:8000).<br><br>
You can then explore to find /cards/categories.<br><br>
The server handles inappriopriate path requests and returns a 404 page, along with illegal method combinations.<br><br><br>
index.html and /cards/categories can both handle GET, but only /cards/categories can handle POST, so it's as follows:<br>
- index.html and GET<br>
- /cards/categories and GET<br>
- /cards/categories and POST<br>
<br><br>
The web app is a modular EJS application, configurable using index.js<br><br> 
The contents are in Polish.<br><br>
Have fun
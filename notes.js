`
    Getting Started
1. In the terminal, navigate to your code folder.

2. In the browser, navigate to GitHub in the browser.

3. Make sure you are logged in, and choose new repository.

4. Make a new repository called breads.

5. Choose public

6. Add a README.md

7. Choose .gitignore search and choose node

8. Skip license.

9. Click the green button to create a repository.

￼
In the new repository view, select the green code button and copy the URL.

-

Set Up Basic Node/Express Project

Return to the terminal and type git status to confirm that you are not already in a git repo.

git clone YOUR NEW GITHUB REPO URL (URL copied from GitHub).
This will make a new directory.
* cd breads

* touch server.js

* touch .env

* npm init -y

* npm install express dotenv

* Open with your text editor, e.g., code . or atom ., etc.

￼
-

Set Up Basic Express Server
Remember: .env is not JavaScript. Do not use spaces, quotes, or semi-colons in this file.
.env
PORT=3003

server.js
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
console.log(PORT)
￼

Terminal
node server.js

Check the terminal to be sure you see the port number you set .inside the .env file.
Once you have confirmed that your .env and server.js are properly configured, return to:

server.js
￼
// DEPENDENCIES
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to an Awesome App about Breads!')
})

// LISTEN
app.listen(PORT, () => {
  console.log('nomming at port', PORT);
})

Terminal
nodemon

Browser
Go to http://localhost:3003
Confirm your res.send() message is showing up in the browser.
Remember: control c in order to quit nodemon
-

Add Bread READ Route: Index
Terminal
Root of project (same level where package.json) is:
* Open a new terminal tab so you can keep nodemon running.

* mkdir controllers

* touch controllers/breads_controller.js

controllers/breads_controller.js
￼
const express = require('express')
const breads = express.Router()

// INDEX
breads.get('/', (req, res) => {
  res.send('This is the index at /breads')
})

module.exports = breads

server.js
Below landing page route:
￼
// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to an Awesome App about Breads')
})

// Breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

Go to http://localhost:3003/breads
Confirm your res.send() message is showing up in the browser.
-

Add data
Terminal
Root of project (same level where package.json) is:
* mkdir models

* touch models/bread.js

models/bread.js
Copy/paste the following:
￼
module.exports = [
  {
    name: 'Rye',
    hasGluten: true,
    image: 'https://images.unsplash.com/photo-1595535873420-a599195b3f4a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  },
  {
    name: 'French',
    hasGluten: true,
     image: 'https://images.unsplash.com/photo-1534620808146-d33bb39128b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  },
  {
    name: 'Gluten-Free',
    hasGluten: false,
    image: 'https://images.unsplash.com/photo-1546538490-0fe0a8eba4e6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
  },
  {
    name: 'Pumpernickel',
    hasGluten: true,
    image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
  }
]

controllers/breads_controller.js
￼
const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

// INDEX
breads.get('/', (req, res) => {
  res.send(Bread)
})

module.exports = breads

Go to http://localhost:3003/breads
Confirm your res.send() data is showing up in the browser.

Terminal
nodemon

Add Bread READ Route: Show
controllers/breads_controller.js
￼
// SHOW
breads.get('/:arrayIndex', (req, res) => {
  res.send(Bread[req.params.arrayIndex])
        })
            
Go to http://localhost:3003/breads/1
Confirm your res.send() data for one bread is showing up in the browser.
-

Don't forget to save your work and send it to GitHub.
￼
git add .
git commit -m 'sending index and show data'
git push origin main
        `;

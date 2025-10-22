# Basic starting for setting up express driven node backend

# Base bare bones
mkdir <app name>
cd <app name>

npm init -> follow prompts appropriately

npm install express -> installs express into the project, generates package.json and package-lock.json

vim app.js (or appropriate name entry point from the npm init step)

# Hello World Example.js
# http://localhost:3000/ will return simple page with "Hello World!"
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

# using express-generator to put default scaffolding up
npx express-generator -> runs at current dir as route and puts together the scaffolding
npm install -> installs dependencies and generates package files
DEBUG=myapp:* npm start -> starts app up, can still use http://localhost:3000/ to route to default base entry point


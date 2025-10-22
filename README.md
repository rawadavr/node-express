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

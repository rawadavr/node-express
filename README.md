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

# Routing description
# <instance of express in script>.<http request method>(<path on server>, <handler function for when executed on the server path>)
# example: app.get('/', (request, response) => { response.send('Hello World') })
# example: app.post('/', (request, response) => { response.send('Got a POST request') })
# example: app.put('/user', (request, response) => { response.send('Got a PUT request at /user') })
# example: app.delete('/user', (request, response) => { response.send('Got a DELETE request at /user') })

# Serving Static Files publicly
# express.static(root, [options])
# example: app.use(express.static('public')) -> can use for multiple static paths, can can apply static prefix too
# example: app.use('/static', express.static('public')) -> maps any <route>:<port>/static/<path to asset> as in place of serving everything publicly

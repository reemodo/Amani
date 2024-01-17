const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const api = require('./server/routes/activitiesApi')
const loginRouter = require('./server/routes/loginAPI');
const registerApi = require('./server/routes/registerApi')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.use('/', loginRouter);
app.use('/activities', api)

const DBManager = require('./server/DBManager');
DBManager.connectToDB()

const port = 3000

app.listen(process.env.PORT ||port, function() {
    console.log(`Runnin runnin and runnin runnin on port ${port}`)
})

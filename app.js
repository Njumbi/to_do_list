const express = require('express');
const bodyParser = require('body-parser')
const ejs = require('ejs')
const path = require('path')

const app = express()

userRoutes = require('./routes/users.routes')

app.use(bodyParser.json())
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(path.join(__dirname, 'public')));

app.use(userRoutes)

app.listen(5000, () => {
    console.log("app has started")
})
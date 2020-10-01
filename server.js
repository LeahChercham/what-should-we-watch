const express = require("express")
const app = express()


const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const PORT = 8000

const movies = require('./server/routes/movies')

mongoose.connect("mongodb://localhost/matchMovies", { useNewUrlParser: true }, () => console.log("Connected to DB MatchMovies"))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    next()
})


//app.use(express.static(path.join(__dirname, "build")))
app.use("/", movies)

// =====================================================
http.listen(PORT, function () {
    console.log('listening on port: ' + PORT)
})
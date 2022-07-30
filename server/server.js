
const express = require('express')
const cors = require("cors")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const { application } = require('express')

const app = express()

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(cors())


const CONNECTION_URL = 'mongodb+srv://Jacky:Test1234@cluster0.gsnsok7.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 8085
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})

//routes 

const routing = require('./routes/routing')

app.use("", routing)


app.listen(PORT, () => {
  console.log("server is running")
})

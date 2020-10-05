const express = require("express")
const app = express()
const db = require("./library/storage")
const port = 5000
require('dotenv').config()

const twilio = require('twilio')

var accountSid = process.env.TWILIOID
var authToken = process.env.TWILIOTOKEN
var client = new twilio(accountSid, authToken)

app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))

app.get("/", function (req, res){
    console.log(process.env.MYNUMBER)
    res.send("Hello world!")
})

app.get("/list", function (req, res){
  db.getNotes()
    .then((list) => {
      console.log("Success")
      console.log(list)
      console.log("````````````````````````````````````````````````````")
      //res.send({some: 'json'})
      res.send(list.rows)
    })
    .catch((err) => {
      res.status(404).send('Iono fam')
    })
})

app.post("/hi", function (req, res){
  client.messages
  .create({
     body: 'This Quincy, testing out this app. txt my personal number if u get this',
     from: process.env.TWILIONUMBER,
     to: process.env.MYNUMBER
   })
  .then((message) => {
    console.log(message.sid)
  }).catch((err) => {
    console.log(err)
  })

  res.status(200).json({
    "hit": "iono"
    })
  
})

//#region Kick Off Functions
const startExpressApp = () => {
    app.listen(port, () => {
      console.log('express is listening on port ' + port)
      })      
  }
  
  const bootupSequenceFailed = (err) => {
    console.error('You are unable to connect to the database:', err)
    console.error('Goodbye!')
    process.exit(1)
  }
  
  //global kickoff point
  db.connect()
    .then(startExpressApp)
    .catch(bootupSequenceFailed)
const express = require("express")
const app = express()
const db = require("./library/storage")
const port = 5000
const bodyParser = require("body-parser")
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
require('dotenv').config()

const twilio = require('twilio')

var accountSid = process.env.TWILIOID
var authToken = process.env.TWILIOTOKEN
var client = new twilio(accountSid, authToken)

app.use(express.static("public"))
app.use(bodyParser.json())
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
  const text = req.body.text.text
  const toPerson = '+1'+req.body.to
  const email = req.body.email

  client.messages
  .create({
     body: text,
     from: process.env.TWILIONUMBER,
     to: toPerson
   })
  .then((message) => {
    console.log(message.sid)
  }).catch((err) => {
    console.log(err)
  })

  const message = {
    to: email,
    from: 'qthibgit@gmail.com',
    subject: 'This is Quintus from AppThis',
    text: text,
  }

  sgMail.send(message)
  .then((message) => {
    console.log(message)
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
const express = require("express")
const app = express()
const db = require("./library/storage")
const port = 5000

app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))

app.get("/", function (req, res){
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
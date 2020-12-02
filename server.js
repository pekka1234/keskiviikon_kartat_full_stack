console.log("Moikka Moi")

const express = require('express')
const app = express()
const port = 3000
app.listen(3000);
app.use(express.static("public"));
console.log("serveri käynnissä")
app.use(express.json({limit:'1mb'}))
const  pankkikorttitiedot = [
  {
    "nimi" :"Pertti järvelä",
    "pin" : "6353"
  },
  {
    "nimi" : "Ahti jarola",
    "pin" : "2223"
  }

]
const  paikkatiedot = [
  {
    "latitude":"61.4740",
    "longitude" : "23.8419",
    "paikka" :"Turtola",
    "arvostelu" : "Yäk",
    "arvostelija" : "Pekka",

  },
  {

  "latitude" : "61.4509",
  "longitude" : "23.8488",
  "paikka" :"Hervanta",
  "arvostelu" : "Haisee",
  "arvostelija" : "Pekka"
}



]



app.get('/haevierailut', function (req, res) {
  res.send(paikkatiedot)
})


app.get('/salaisetpankkitiedot', function (req, res) {
  res.send(pankkikorttitiedot)
})

app.post('/pankkitietojen_talletus', function(req, res){
  pankkikorttitiedot.push(req.body);
  console.log(pankkikorttitiedot);
  res.send(200);
})

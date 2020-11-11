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
app.get('/salaisetpankkitiedot', function (req, res) {
  res.send(pankkikorttitiedot)
})

app.post('/pankkitietojen_talletus', function(req, res){
  pankkikorttitiedot.push(req.body);
  console.log(pankkikorttitiedot);
  res.send(200);
})

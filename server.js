console.log("Moikka Moi")

const express = require('express')
const app = express()
const port = 3000
app.listen(3000);
app.use(express.static("public"));
console.log("serveri käynnissä")

const pankkikorttitiedot = [
  {
    "nimi" :"Pertti järvelä",
    "pinkoodi" : "6353"
  },
  {
    "nimi" : "Ahti jarola",
    "pinkoodi" : "2223"
  }

]
app.get('/salaisetpankkitiedot', function (req, res) {
  res.send(pankkikorttitiedot)
})

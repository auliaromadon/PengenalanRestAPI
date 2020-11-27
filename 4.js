const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.get("/bmi", (req, res) => {
    let tinggi = Number(req.body.tinggi)
    let berat = Number(req.body.berat)
    let BMI = berat / (tinggi*tinggi)
    if (BMI <18.5) {
        status = "kekurangan berat badan" 
    } else if ( BMI <= 24.9){
        status = "normal/ideal"
    } else if ( BMI <= 29.9){
        status = "kelebihan berat badan"
    } else {
        status = "kegemukan/obesitas"
    }

    let response = {
        tinggi: tinggi,
        berat: berat,
        bmi: BMI,
        status: status
    }
    res.json(response)
})

app.listen(4000, () => {
    console.log("Server on port 4000")
})
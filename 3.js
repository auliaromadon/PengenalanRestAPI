const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.get("/decimal", (req,res) => {
    let decimal = Number(req.body.decimal)
    let biner = parseInt(decimal, 10).toString(2)
    let octal = parseInt(decimal, 10).toString(8)
    let hexadecimal = parseInt(decimal, 10).toString(16)

    let response = {
        decimal: decimal,
        result: {
            biner: biner,
            octal:octal,
            hexadecimal: hexadecimal
        }
    }
    res.json(response)
})

app.get("/biner", (req, res) => {
    let biner = Number(req.body.biner)
    let decimal = parseInt(biner, 2).toString(10)
    let octal = parseInt(biner, 2).toString(8)
    let hexadecimal = parseInt(biner, 2).toString(16)

    let response = {
        biner: biner,
        result: {
            decimal: decimal,
            octal: octal,
            hexadecimal: hexadecimal
        }
    }
    res.json(response)
})

app.get("/octal", (req, res) => {
    let octal = Number(req.body.octal)
    let decimal = parseInt(octal, 8).toString(10)
    let biner = parseInt(octal, 8).toString(2)
    let hexadecimal = parseInt(octal, 8).toString(16)

    let response = {
        octal: octal,
        result: {
            decimal: decimal,
            biner: biner,
            hexadecimal: hexadecimal
        }
    }
    res.jsonp(response)
})

app.get("/hexadecimal", (req, res) => {
    let hexadecimal = Number(req.body.hexadecimal)
    let decimal = parseInt(hexadecimal, 16).toString(10)
    let biner = parseInt(hexadecimal, 16).toString(2)
    let octal = parseInt(hexadecimal, 16).toString(8)

    let response = {
        hexadecimal: hexadecimal,
        result: {
            decimal: decimal,
            biner: biner,
            octal: octal
        }
    }
    res.json(response)
})

app.listen(3000, () => {
    console.log("Server on port 3000")
})
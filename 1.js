const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))
app.use(cors())

app.post("/luassegitiga", (req,res) => {
    let alas = Number(req.body.alas)
    let tinggi = Number(req.body.tinggi)
    let luas = alas * tinggi / 2

    let response = {
        alas: alas,
        tinggi: tinggi,
        luassegitiga: luas
    }

    res.json(response)
})

app.post("/volumebalok", (req,res) => {
    let tinggi = Number(req.body.tinggi)
    let lebar = Number(req.body.lebar)
    let panjang = Number(req.body.panjang)
    let volume = panjang*lebar*tinggi

    let response = {
        panjang: panjang,
        lebar: lebar,
        tinggi: tinggi,
        volume_balok: volume
    }

    res.json(response)
})

app.post("/luaslingkaran", (req, res) => {
    let phi = Number(req.body.phi)
    let jari_jari = Number(req.body.jari_jari)
    let luas = phi*(jari_jari*jari_jari)

    let response ={
        phi: phi,
        jari_jari: jari_jari,
        luas_lingkaran: luas
    }
    
    res.json(response)
})

app.post("/luasselimutkerucut", (req,res) => {
    let phi = Number(req.body.phi)
    let jari_jari = Number(req.body.jari_jari)
    let s = Number(req.body.s)
    let luas = phi*jari_jari*s

    let response = {
        phi: phi,
        jari_jari: jari_jari,
        s: s,
        luas_Selimut_kerucut: luas
    }

    res.json(response)
})

app.listen(1000, () => {
    console.log("Server run on port 1000")
})
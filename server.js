const fs = require('fs')
const express = require('express')
const app = express();


//default URL
app.get('/', (req, res) => {
    res.status(200).json({
        "status": "success!",
        "message": "Aplication is running..."
    })
})

app.get('/rizal', (req, res) => {
    res.status(200).json({
        "message": "Ping successfully!"
    })
    // if (app.get('/', (req, res) => {
    //     res.end("RAWR")
    // })) {

    // } else {
    //     console.log("err")
    // }
})

// middleware / handler untuk URL yang tidak dapat diakses
app.use((req, res, next) => {
    res.status(404).json({
        "status" : "failed",
        "message" : "URL not exist"
    })
})

app.listen('3000', () => {
    console.log("Server berjalan di PORT 3000")
})
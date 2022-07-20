const express = require('express')

const path = require('path')

const app = express()

//end point to load basic html and setup callback function
app.get ('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})


const port = process.env.PORT || 4005

app.listen (port, () => {
    console.log (`server is running on port ${port}`)
})




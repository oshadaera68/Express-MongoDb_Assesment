const express = require('express')

// export Mongoose
const mongoose = require('mongoose')
const app = express()
const port = 4000

app.use(express.json())

// mongodb connction part
const url = 'mongodb://localhost/fbclone'

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection;

con.on("open", ()=>{
    console.log("mongo db successfully completed");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
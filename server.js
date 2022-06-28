const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()



let db,
    dbConnectionString = process.env.DB_STRING,     // grabing var from env file
    dbName = 'sample_mflix',
    collection



MongoClient.connect(dbConnectionString)
    .then(client => {
        console.log(`Connected to ${dbName} DB!`)
        db = client.db(dbName)
        collection = db.collection('movies')
    })

app.set('view engine', 'ejs')               // helps us with templating 
app.use(express.static('public'))           // set up a folder to hold our css, js, fonts, imgs without a link
app.use(express.urlencoded({ extended:true }))  // helps us parse urls
app.use(express.json())                     // help express parse json
app.use(cors())




app.listen(process.env.PORT || PORT, _ => {
    console.log(`Server is running!`)
})
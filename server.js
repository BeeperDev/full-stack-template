const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()
app.use(cors())



let db,
    dbConnectionString = process.env.DB_STRING,     // grabing var from env file
    dbName = 'sample_mflix',
    collection



MongoClient.connect(dbConnectionString)
    .then(client => {
        console.log('Connected to DB!')
        db = client.db(dbName)
        collection = db.collection('movies')
    })
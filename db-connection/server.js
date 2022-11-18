require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/routes')
const app = express()
var cors = require('cors');
app.use(cors());
app.use(express.json())
app.use('/api', routes)
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
const uri = process.env.DATABASE_URL

async function connect() {
    try{
        await mongoose.connect(uri)
        console.log("Connected to MongoDB")
    } catch (error){
        console.error(error);
    }
}

connect();

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
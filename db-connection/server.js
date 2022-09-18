require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/routes')
const app = express()
app.use(express.json())
app.use('/api', routes)
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

app.listen(8000, () => {
    console.log("Server started on port 8000");
});
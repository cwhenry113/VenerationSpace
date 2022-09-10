const express = require('express')
const mongoose = require('mongoose')
const app = express();

const uri = 'mongodb+srv://venspace411:N8XNAYiyi6XwLPHK@veneration-space.o0e31fq.mongodb.net/test'

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
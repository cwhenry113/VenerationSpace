const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/routes');
const app = express();
app.use(express.json());
app.use('/api', routes)
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
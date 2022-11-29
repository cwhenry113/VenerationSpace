const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    parent: {
        type: String
    },
    author: {
        type: String, 
        required: true
    },
    text: {
        type: String, 
        required: true
    }
})

module.exports = mongoose.model('Comments', dataSchema)


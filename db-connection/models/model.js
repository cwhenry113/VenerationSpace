const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    birthDate:{
        required: true,
        type: String
    },
    deathDate:{
        required: true,
        type: String
    },
    pictureURL: {
        required: true,
        type: String
    },
    bio: {
        required: true,
        type: String
    },
    guardian: {
        required: true,
        type: String
    },
    dateCreated: {
        type: String
    },
    dateUpdated: {
        type: String
    }
})

module.exports = mongoose.model('Data', dataSchema)


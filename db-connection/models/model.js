const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    fullName: {
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
    guardianUser: {
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


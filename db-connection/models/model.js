const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    firstName: {
        required: true,
        type: String
    },
    middleName: {
        required: true,
        type: String
    },
    lastName: {
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
    guardianFirstName: {
        required: true,
        type: String
    },
    guardianLastName: {
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


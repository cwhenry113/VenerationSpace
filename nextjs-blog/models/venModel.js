import { Schema, model, models } from 'mongoose';

// Schema for venerations
const venSchema = new Schema({
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
}
);

const Veneration = models.Veneration || model('Data', venSchema);
export default Veneration;
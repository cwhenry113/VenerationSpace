import { Schema, model, models } from 'mongoose';

// Schema for venerations
const venSchema = new Schema({
  timestamps: true,
  unique: true,
  //Required------------------------------------------
  givenName: {type: String, required: true, maxLength: 32, minLength: 1},
  familyName: {type: String, required: true, maxLength: 32, minLength: 1},
  //Non-required--------------------------------------
  middleName: {type: String, maxLength: 32},
  born: Date,
  died: Date,
  bio: String,
  comments: [String]
});

const Veneration = models.Veneration || model('Veneration', venSchema);
export default Veneration;
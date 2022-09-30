import { Schema, model, models } from 'mongoose';

const venSchema = new Schema({
  givenName: String,
  familyName: String,
  birthDay: Number,
  birthMonth: Number,
  birthYear: Number,
});

const Veneration = models.Veneration || model('Veneration', venSchema);

export default Veneration;

//Defines the schema for model Comment
import { Schema, model, models } from 'mongoose';

// Schema for comments
const comment = new Schema({
    timestamps: true,
    unique: true,
    parent: {type: String},
    author: {type: String, required: true},
    text: {type: String, required: true},
  });

const Comment = models.Comment || model('Comment', comment);
export default Comment;

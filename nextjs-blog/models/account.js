import mongoose from 'mongoose';

const account = new mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    guardian: {
        type: String
    },
    email: {
        type: String
    },
    name: {
        type: String
    },
  });

const Account = models.Account || model('Account', account);
export default Account;
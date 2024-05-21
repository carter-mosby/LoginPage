const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    firstName: String,
    lastName: String, 
    email: {
        type: String,
        unique: true
    },
    userName: {
        type: String,
        unique: true
    },
    password: String,
    confirmPassword: String,
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
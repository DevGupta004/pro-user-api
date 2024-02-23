const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {type: String},
    email: {type: String, require: true},
    password: {type: String, require: true},
    profileImage: {type: String},
});

const User = mongoose.model('User', userSchema);

module.exports = User;
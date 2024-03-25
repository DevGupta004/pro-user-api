const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {type: String},
    email: {type: String, require: true},
    password: {type: String},
    lastOtp: {type: String},
    deviceId: {type: String},
    employeeId: {type: String},
    orginationName: {type: String, default: 'Pro-Focus'},
    profileImage: {type: String},
    isUserVerified: {type: Boolean},
});

const User = mongoose.model('User', userSchema);

module.exports = User;
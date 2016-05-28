var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true }
}, {
    timestamp: true
})

var UserModel = mongoose.model('c1', userSchema);

module.exports = UserModel;

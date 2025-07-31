const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    name: String,
    email: String,
    number: Number
});

module.exports = mongoose.model('testdb', userSchema);  // Export the User model for use in other files.

const mongoose = require('../database/db')

const UserSchema = new mongoose.Schema({
    gemas: {
        type: Number,
        require: true
    },
    guild: {
        type: String,
        require: true
    },
});

const User = mongoose.model('User', UserSchema)

module.exports = User;
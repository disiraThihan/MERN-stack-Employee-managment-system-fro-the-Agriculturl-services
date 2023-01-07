const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    avatar : {
        type: String
    },
    username : {
        type: String
    },
    password : {
        type: String
    },
    email : {
        type: String
    },
    gender : {
        type: String
    },
    phone : {
        type: String
    },
    about : {
        type: String
    },
    age : {
        type: Number
    },
    color : {
        type: String
    }
});

const data = mongoose.model('farmer', schema);

module.exports = data;
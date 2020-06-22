const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let UserSchema = new Schema({
    name: {type: String, required: true, max: 128},
    age: {type: Number, required: true},
    online: {type: Boolean, required: true},
});

module.exports = mongoose.model('User', UserSchema);
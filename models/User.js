// --- npm inculuding
const mongoose = require('mongoose');

//---  Schema 
const UserSchema = new mongoose.Schema({});
// --- mongooose methord
UserSchema.methods.addMessage = async function () {};
//--- collection name : User
const User = mongoose.model('User', UserSchema);

module.exports = User;

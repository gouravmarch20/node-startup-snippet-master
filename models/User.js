// --- npm inculuding
const mongooose = require('mongoose');

//---  Schema 
const UserSchema = new mongooose.Schema({});
// --- mongooose methord
UserSchema.methods.addMessage = async function () {};
//--- collection name : User
const User = mongooose.model('User', UserSchema);

module.exports = User;

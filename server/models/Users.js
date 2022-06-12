//***** Modèle de Schema pour l'utilisateur ******/
const mongoose = require('mongoose');
// Import validateur unique
const uniqueValidator = require('mongoose-unique-validator');

// Schema Utilisateur unique
const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    uppercase: false,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
  role: {
    type: String,
  },
});

//Ajout du validateur en tant que plugin avant l'export du modèle User
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);
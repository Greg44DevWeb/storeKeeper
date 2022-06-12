//***** Modèle de Schema pour l'utilisateur ******/
const mongoose = require('mongoose');
// Import validateur unique
const uniqueValidator = require('mongoose-unique-validator');

// USER SCHEMA 
const userSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
    uppercase: true,
    trim: true,
  },
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
  role: {
    type: String,
    enum: ['Admin', 'StoreKeeper', 'Teacher', 'Student', 'Visitor'],
    
  },
  created_at : { type: Date, immutable: true, required: true, default: Date.now },

  updated_at: { type: Date, required: true, default: Date.now },
});

//Ajout du validateur en tant que plugin avant l'export du modèle User
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);
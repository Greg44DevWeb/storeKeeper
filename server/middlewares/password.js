//***** User Password strength ******/
// Password Validator import
const passwordValidator = require('password-validator');

// Schema  of validation
const passwordSchema = new passwordValidator();

// schema have to respect these otpions : 
passwordSchema
.is().min(5) // Min Lenght 5
.is().max(10) // Max lenght 10
.has().digits(2) // have at least 2 digits
.has().uppercase(2) // have at least 2 uppercases
.has().not().spaces() // should not have spaces
.has().symbols(1) // have 1 symbol 
.is().not().oneOf(['Passw0rd', 'Password123', 'azerty12', 'Azerty12', 'test123', 'Test123']) // Blacklist values 

console.log("contenu du test" + passwordSchema);

// compare Password and validation Schema 

module.exports = (req, res, next) => {
  if (passwordSchema.validate(req.body.password)) {
    next();
  } else {
    return res
      .status(400)
      .json({
        error:
          "Le mot de passe n'est pas suffisament sécurisé : Il doit contenir entre 5 et 10 caractères, 2 chiffres, 2 majuscules et ne contient pas d'espaces : " +
          passwordSchema.validate("req.body.password", { list: true }),
      });
  }
};
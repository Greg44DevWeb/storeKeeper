const bcrypt = require('Bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/Users');

//*** Signup function for new User ***//
exports.signup=(req, res, next) => {
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
        const user = new User ({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: hash,
            role: req.body.role,
        })
        user.save()
        .then(() => res.status(201).json({message: 'Utilisateur créé'}))
        .catch(error => res.status(400).json({message: "Adresse Email déjà utilisée par un autre utilisateur"}))
    })
    .catch(error => res.status(500).json({message: "Une erreur serveur s'est produite..."}))
};

//*** Modify User Role ***//
exports.updateUser = (req, res, next) => {
  const userToUpDate = req.body;
  User.findOneAndUpdate({ _id: req.params.id }, userToUpDate, { new: true })
    .then(() => res.status(200).json({ message: "Role modifié!" }))
    .catch((error) =>
      res.status(401).json({ message: `modification impossible` })
    );
};

//*** Delete User from Database ***//
exports.deleteUser = (req, res, next) => {
  const deleteUser = req.body;
  User.findOneAndDelete({ _id: req.params.id }, deleteUser)
    .then(() => res.status(200).json({ message: "Utilisateur supprimé!" }))
    .catch((error) =>
      res.status(401).json({ message: `suppression impossible` })
    );
};
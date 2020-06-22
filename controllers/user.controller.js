var User = require('../models/user.model');

exports.get = function (req, res) {
    User.find(function (err, product) {
if (err) return next(err);
        res.send(product);
    })
};

exports.create = function (req, res) {
    let user = new User(
     {
     name: req.body.name,
     age: req.body.age,
     online: req.body.online,
     }
     );
     user.save(function (err) {
    if (err) {
    return next(err)
     }
     res.send("Usuario registrado")
     })
    };
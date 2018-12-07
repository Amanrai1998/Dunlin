const db = require("../models");
const jwt = require("jsonwebtoken");

exports.signin = function(req, res){
    db.User.findOne({email: req.body.email}).then(function (user) {
        user.comparePassword(req.body.password, function(err, isMatch){
            if(isMatch) {
                const token = jwt.sign({userId: user.id}, process.env.SECRET_KEY,{expiresIn: 60*15});
                res.status(200).json({
                    userId: user.id,
                    username: user.username,
                    profileUrl: user.profileUrl,
                    token
                });
            }
            else{
                res.status(400).json({message: "Invalid Email/Password"});
            }
        })
    }).catch(function(err){
        res.status(400).json({message: "Invalid Email/Password"});
    });
};

exports.signup = function(req, res){
    db.User.create(req.body).then(function(user){
        const token = jwt.sign({userId: user.id}, process.env.SECRET_KEY, {expiresIn: 60*15});
        res.status(200).json({
            userId: user.id,
            username: user.username,
            profileUrl: user.profileUrl,
            token
        });
    }).catch(function(err){
        res.status(400).json(err);
    });
};

module.exports = exports;
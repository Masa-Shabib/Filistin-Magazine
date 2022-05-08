const { User } = require('../models/user.model');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
require("dotenv").config();

module.exports.findUser = (req, res) => {
    User.findOne({ _id: req.params.id }).populate("posts").populate("comments")
        .then(user => res.json(user))
        .catch(err => res.json(err))
}

module.exports.getAll = (req, res) => {
    User.find({})
        .then(user => res.json(user))
        .catch(err => res.json(err))
}

module.exports.register = (req, res) => {
    User.create(req.body)
        .then(user =>
            ({
                token: jwt.sign({
                    id: user._id
                }, process.env.SECRET_KEY),
                user
            })

        ).then(({ token, user }) => {
            res.cookie("userToken", token, {
                    httpOnly: true
                })
                .json({ msg: "success!", user, token });
        })
        .catch(err => res.status(400).json(err));
}

/// update


module.exports.updateUser = (request, response) => {
    Product.findOneAndUpdate({_id: request.params.id} ,request.body, {new:true , runValidators: true} )
    .populate("posts").populate("comments")
    .then(updatedPerson => response.json(updatedPerson))
    .catch(err => response.json(err))
}



module.exports.login = (req, res) => {
    User.findOne({ email: req.body.email })
    .then(user => {
        if (user === null) {
            res.json({msg:"Invalid Email"});
        }else{
            bcrypt.compare(req.body.password, user.password)
            .then(correctPassword =>{
                if (correctPassword) {
                    res.cookie("userToken", jwt.sign({_id:user._id}, process.env.SECRET_KEY), {httpOnly: true})
                    .json({ msg: "success!" })
                }else{
                    res.json({msg:"Invalid Password"});
                }
            })
            .catch(err => response.json(err))
        }
    })
    .catch(err => response.json(err))

}

module.exports.logout = (req, res) => {
    res.clearCookie("usertoken");
    res.json({ msg: "User Logged Out" });
    res.sendStatus(200);
}

module.exports.authenticate = (req, res, next) => {
    jwt.verify(req.cookies.userToken, process.env.SECRET_KEY, (err, payload) => {
        if (err) {
            res.status(401).json({ verified: false })
        } else {
            next();
        }
    });
}
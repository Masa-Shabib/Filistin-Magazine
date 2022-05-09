const { User } = require('../models/user.model');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
require("dotenv").config();

module.exports.findUser = (req, res) => {
    User.findOne({ _id: req.params.id })
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
        .catch(err => res.json(err));
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
    console.log("hiiii")
    res.clearCookie('usertoken');
    res.cookie("usertoken", jwt.sign({_id:""}, process.env.SECRET_KEY),{
        httpOnly:true,
        maxAge: 0
    }).json({ msg: "User Logged Out" });

}

module.exports.getLoggedUser = (req, res) => {
    const decodedJWT= jwt.decode(req.cookies.userToken, {complete:true});
    User.findById(decodedJWT.payload._id)
    .then(user=>res.json({user}))
    .catch(err => res.json(err))
}

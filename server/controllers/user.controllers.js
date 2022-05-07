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
            res
                .cookie("userToken", token, {
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



// module.exports.login = async(req, res) => {
//     const user = await User.findOne({ email: req.body.email })
//         .catch(err => res.status(400).json(err));
//     if (user === null) {
//         return res.sendStatus(400);
//     }
//     const correctPassword = await bcrypt.compare(req.body.password, user.password);
//     if (!correctPassword) {
//         return res.sendStatus(400);
//     }
//     const userToken = jwt.sign({
//         id: user._id
//     }, process.env.FIRST_SECRET_KEY);
//     res
//         .cookie("userToken", userToken, {
//             httpOnly: true
//         })
//         .json({ msg: "success!", user: user, token: userToken })
// }

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
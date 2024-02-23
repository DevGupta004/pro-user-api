const User = require('../models/user');

exports.createUser = async (req, res) => {
    console.log("createUser Users", req);

    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.getAllUsers = async (req, res) => {
    console.log("getall Users", req);
    try {
        const users = await User.find();
        res.send(users);
    } catch (error) {
        res.status(500).send(error);
    }
}





// exports.createUser = async (req, res) => {
//     try {
//         const user = new User(req.body);
//         await user.save();
//         res.status(201).send(user);
//     } catch (error) {
//         res.status(400).send(error);
//     }
// };

// exports.getAllUsers = async (req, res) => {
//     try {
//         const users = await User.find();
//         res.send(users);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// };

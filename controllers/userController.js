const { default: mongoose } = require("mongoose");
const User = require("../models/user");

exports.createUser = async (req, res) => {
  const email = req.body.email;
  const users = await User.findOne({ email });

  try {
    if (users && users.email === email) {
      res.status(201).send("User already exists");
    } else {
      const user = new User(req.body);
      await user.save();
      res.status(201).send(user);
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getAllUsers = async (req, res) => {
  console.log("getall Users", res);
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      res.status(400).send("Invalid user id");
    } else {
      const user = await User.findById(userId);

      if (!user) {
        res.status(404).send("User not found");
      } else {
        res.send(user);
      }
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.findAndUpdate = async function (req, res) {
    try {
        const userId = req.params.id;
        const updates = req.body; // Data to update
        
        // Find user by _id and update
        const user = await User.findByIdAndUpdate(userId, updates, { new: true });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        res.json(user); // Send the updated user as JSON response
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
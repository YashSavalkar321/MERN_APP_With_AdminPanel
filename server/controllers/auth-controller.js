const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
  try {
    res.status(200).send("Hello World using controller!");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

// * User Registration Logic *
const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    // Check if email exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hash password before saving
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create user with hashed password
    const userCreated = await User.create({
      username,
      email,
      phone,
      password: hashedPassword,
    });

    res.status(200).json({
      message: "Registration Successful",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

// * User Login Logic *
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const userExists = await User.findOne({ email });
    if (!userExists) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(password, userExists.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    res.status(200).json({
      message: "Login Successful",
      token: await userExists.generateToken(),
      userId: userExists._id.toString(),
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error at login");
  }
};

// * Get User Data *
const user = async (req, res) => {
  try {
    const userData = req.user;
    console.log(userData);
    return res.status(200).json({ userData });
  } catch (error) {
    console.error("Error from user route:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { home, register, login, user };

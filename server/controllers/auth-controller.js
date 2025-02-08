const { useDebugValue } = require("react");
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

// * User Registration Login *
// 1. Get Registration data : retrieve user data(username,email,password)
// 2. check email existance :
// 3. Hash password
// 4. Create New User with hashed password
// 5. Save to DialogBody
// 6. Respond

const register = async (req, res) => {
  try {
    //1. Get Registration data
    const { username, email, phone, password } = req.body;

    //2. check email existance
    const userExists = await User.findOne({ email: email });

    if (userExists) {
      return res.status(400).json({ message: "Email already exists" });
    }

    //3. Hash password
    // const saltRound=10;
    // const hashedPassword=await bcrypt.hash(password, saltRound);

    const userCreated = await User.create({ username, email, phone, password });

    console.log(userCreated);
    res
      .status(200)
      .json({
        message: "Registration Successful",
        token: await userCreated.generateToken(),
        userId: userCreated._id.toString(),
      });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};


const login =async (req, res) => {

  try {
    const {email, password} = req.body;

    const userExists = await User.findOne({ email});
    console.log(userExists);

    if(!userExists) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    //const user = await bcrypt.compare(password , userExists.password);

    const user = await userExists.comparePassword(password);

    if(user){
      res
      .status(200)
      .json({
        message: "Login Successful",
        token: await userExists.generateToken(),
        userId: userExists._id.toString(),
      });
    }
    else {
      return res.status(401).json({ message: "Invalid Credentials" });
    }
    
  } catch (error) {
    res.status(500).send("Internal Server Error at login");
  }
}


// To send user Data - User Logic

const user = async (req,res) => {
  try {
    const userData=req.user;
    console.log (userData);
    return res.status(200).json({ userData });

  } catch (error) {
    console.log("error from route ", error);
    
  }
}


module.exports = { home, register , login , user };

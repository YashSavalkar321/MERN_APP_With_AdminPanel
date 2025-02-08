const User = require("../models/user-model");
const Contact = require("../models/contact-model");


//Get the all users from the database
const getAllUsers =  async (req,res) => {
    try {
        const users = await User.find().select({
            password:0,
        });
        console.log(users);
        if(!users || users.lenght === 0){
            return res.status(404).json({ message : "User not found" });
        }

        return res.status(200).json(users);
    } catch (error) {
        next(error);
    }
};


// Get all contacts from the database

const getAllContacts = async (req,res) => {
    try {
        
        const contacts = await Contact.find();

        if(!contacts || contacts.lenght === 0){
            return res.status(404).json({ message : "Contacts not found" });
        }
        return res.status(200).json(contacts);

    } catch (error) {
        next(error);
    }
};

//Get Single user By ID 

const getUserById =  async (req,res) => {
    try {
        const id = await req.params.id;
        const users = await User.findOne({ _id : id}).select({
            password:0,
        });
        console.log(users);
        if(!users || users.lenght === 0){
            return res.status(404).json({ message : "User not found" });
        }

        return res.status(200).json(users);
    } catch (error) {
        next(error);
    }
};


//Update User By ID Logic

const updateUserById = async (req, res) => {
    try {
        
        const { id } = req.params;
        const updateUserData = req.body;

        const updatedData = await User.updateOne({ _id: id },{
            $set: updateUserData,
        });
        
        if(!updatedData){
            return res.status(404).json({ message : "User not found" });
        }
        return res.status(200).json({ message : "User updated successfully" , updatedData});

    } catch (error) {
        next(error);
    }
}



// user Delete Logic 

const deleteUserById = async (req, res) => {
    const { id } = req.params;
    console.log(id);
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


// user Delete Logic for contact 

const deleteContactById = async (req, res) => {
    const { id } = req.params;
    console.log(id);
  try {
    const deletedContact = await Contact.findByIdAndDelete(id);
    if (!deletedContact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


module.exports = {getAllUsers, getAllContacts , deleteUserById , getUserById , updateUserById , deleteContactById};
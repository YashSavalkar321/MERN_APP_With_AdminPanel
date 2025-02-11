const User = require("../models/user-model");
const Contact = require("../models/contact-model");

// Get all users
const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find().select({ password: 0 });

        if (!users || users.length === 0) {
            return res.status(404).json({ message: "Users not found" });
        }

        return res.status(200).json(users);
    } catch (error) {
        next(error);
    }
};

// Get all contacts
const getAllContacts = async (req, res, next) => {
    try {
        const contacts = await Contact.find();

        if (!contacts || contacts.length === 0) {
            return res.status(404).json({ message: "Contacts not found" });
        }

        return res.status(200).json(contacts);
    } catch (error) {
        next(error);
    }
};

// Get single user by ID
const getUserById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id).select({ password: 0 });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.status(200).json(user);
    } catch (error) {
        next(error);
    }
};

// Update user by ID
const updateUserById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updateUserData = req.body;

        const updatedData = await User.updateOne({ _id: id }, { $set: updateUserData });

        if (updatedData.modifiedCount === 0) {
            return res.status(404).json({ message: "User not found or no changes made" });
        }

        return res.status(200).json({ message: "User updated successfully" });
    } catch (error) {
        next(error);
    }
};

// Delete user by ID
const deleteUserById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        next(error);
    }
};

// Delete contact by ID
const deleteContactById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedContact = await Contact.findByIdAndDelete(id);

        if (!deletedContact) {
            return res.status(404).json({ message: "Contact not found" });
        }

        res.status(200).json({ message: "Contact deleted successfully" });
    } catch (error) {
        next(error);
    }
};

module.exports = { getAllUsers, getAllContacts, deleteUserById, getUserById, updateUserById, deleteContactById };

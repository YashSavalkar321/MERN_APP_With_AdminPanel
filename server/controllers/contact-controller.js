const Contact = require("../models/contact-model");

const contactForm = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Validate required fields
        if (!name || !email || !message) {
            return res.status(400).json({ message: "All fields are required" });
        }

        await Contact.create({ name, email, message });

        return res.status(201).json({ message: "Message sent successfully" });
    } catch (error) {
        console.error("Error in contactForm:", error);
        return res.status(500).json({ message: "Message not sent, server error" });
    }
};

module.exports = contactForm;

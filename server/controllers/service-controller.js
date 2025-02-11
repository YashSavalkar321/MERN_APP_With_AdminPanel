const Service = require("../models/service-model");

const services = async (req, res, next) => {
    try {
        const response = await Service.find();

        if (!response || response.length === 0) {
            return res.status(404).json({ msg: "No Service Found" });
        }

        return res.status(200).json({ services: response });

    } catch (error) {
        console.error(`Error in services: ${error}`);
        next(error); // Pass error to middleware
    }
};

module.exports = services;

const validate = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (err) {
        const status = 422;
        const message = "Fill the input properly";
        const extraDetails = err.errors?.[0]?.message || "Invalid input";

        const error = new Error(message);
        error.status = status;
        error.extraDetails = extraDetails;

        console.error(error);
        next(error);
    }
};

module.exports = validate;

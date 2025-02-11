const errorMiddleware = (err, req, res, next) => {
    console.error(err); // Log error for debugging

    const status = err.status || 500;
    const message = err.message || "Internal Server Error";
    const extraDetails = err.extraDetails || "An unexpected error occurred.";

    return res.status(status).json({
        success: false,
        error: {
            message,
            extraDetails,
        },
    });
};

module.exports = errorMiddleware;

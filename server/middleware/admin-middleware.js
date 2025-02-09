const adminMiddleware = async (req, res, next) => {
    try {
        if (!req.user) {
            return res.status(401).json({ message: "Unauthorized: User not authenticated" });
        }

        if (!req.user.isAdmin) {
            return res.status(403).json({ message: "Access denied: User is not an administrator" });
        }

        next(); // Proceed to the next middleware
    } catch (error) {
        next(error);
    }
};

module.exports = adminMiddleware;

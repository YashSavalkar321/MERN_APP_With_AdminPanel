const { z } = require("zod");

// Creating an object schema for login
const loginSchema = z.object({
    email: z.string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Please enter a valid email address" })
        .max(255, { message: "Email should not be more than 255 characters long" }),

    password: z.string({ required_error: "Password is required" })
        .trim()
        .min(8, { message: "Password should be at least 8 characters long" })
        .max(255, { message: "Password should not be more than 255 characters long" }),
});

// Extending loginSchema for signup
const signupSchema = loginSchema.extend({
    username: z.string({ required_error: "Name is required" })
        .trim()
        .min(3, { message: "Name should be at least 3 characters long" })
        .max(255, { message: "Name should not be more than 255 characters long" })
        .regex(/^[a-zA-Z\s]+$/, { message: "Name should contain only letters" }),

    phone: z.string({ required_error: "Phone is required" })
        .trim()
        .min(10, { message: "Phone number should be at least 10 digits long" })
        .max(15, { message: "Phone number should not be more than 15 digits long" })
        .regex(/^\d+$/, { message: "Phone number should contain only digits" }),
});

module.exports = { signupSchema, loginSchema };

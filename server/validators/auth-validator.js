const {z} = require("zod");

//creating an object schema

const loginSchema = z.object({
    email: z.string({ required_error :"Email is required" })
    .trim()
    .email({message :"Please enter a valid email address"})
    .min(6, {message :"Email should be at least 6 characters long"})
    .max(255, {message :"Email should not be more than 255 characters long"}),

    password: z.string({ required_error :"Password is required" })
    .trim()
    .min(8, {message :"Password should be at least 8 characters long"})
    .max(255, {message :"Password should not be more than 255 characters long"}),
});

const signupSchema = loginSchema.extend({
    username: z.string({ required_error :"Name is required" })
    .trim()
    .min(3, {message :"Name should be at least 3 characters long"})
    .max(255, {message :"Name should not be more than 255 characters long"}),


    phone: z.string({ required_error :"Phone is required" })
    .trim()
    .min(10, {message :"Phone number should be at least 10 digits long"})
    .max(15, {message :"Phone number should not be more than 15 digits long"}),

   
});


module.exports = {signupSchema , loginSchema};

const express = require("express");
const router = express.Router();
const authcontroller = require("../controllers/auth-controller");


// middleware routes for authentication and authorization routes
const validate = require("../middleware/validate-middleware");
const {signupSchema , loginSchema} = require("../validators/auth-validator");
const authMiddleware =require ("../middleware/auth-middleware")

//1st way to add routes
// router.get("/",(req, res) => {
//     res.status(200).send("Hello World!");
// });


//2nd way to add routes
// router.route("/").get((req, res) => {
//   res.status(200).send("Hello World!");
// });

// router.route("/register").get((req, res) => {
//   res.status(200).send("Hello from register page!");
// });

// router.route("/login").get((req, res) => {
//   res.status(200).send("Hello from login page!");
// });


router.route("/").get(authcontroller.home);

router.route("/register").post(validate(signupSchema), authcontroller.register);

router.route("/login").post(validate(loginSchema), authcontroller.login);

router.route("/user").get(authMiddleware , authcontroller.user);

module.exports = router;

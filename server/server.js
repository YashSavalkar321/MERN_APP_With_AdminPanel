require("dotenv").config();
const express = require("express");
const cors =require('cors');
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service-router");
const adminRoute = require("./router/admin-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middleware/error-middleware");


// const corsOptions ={
//   origin: "http://localhost:5173",
//   methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
//   credentials: true,
// };
// middleware routes for authentication and authorization routes

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);

//admin route

app.use("/api/admin", adminRoute);

// error handling middleware
app.use(errorMiddleware);

// alternative way of creating routes for authorization
// app.get("/", (req,res)=>{
//     res.status(200).send("Hello World!");
// });

// app.get("/register", (req,res)=>{
//     res.status(200).send("Hello from register page!");
// });

// app.get("/login", (req,res)=>{
//     res.status(200).send("Hello from login page!");
// });

const PORT = 5000;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

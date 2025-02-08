const mongoose = require('mongoose');
// const URI="mongodb://127.0.0.1:27017/MERN_admin";
// mongoose.connect(URI);

const URI=process.env.MONGDB_URI;
const connectDb=async ()=>{
    try {
        await mongoose.connect(URI);
        console.log("Connected to MongoDB successfully");  
    } catch (error) {
        console.error("Database connection failed", error);
        process.exit(0);
    }
};

module.exports=connectDb;



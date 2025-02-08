const mongoose = require ('mongoose');
const bcrypt = require ("bcryptjs");
const jwt= require ("jsonwebtoken");


const userSchema =new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },  
});


//password secure using bcrypt

userSchema.pre('save', async function (next) {

    const user=this;

    if(!user.isModified("password")) {
        next();
    }

    try {
        const saltRound=await bcrypt.genSalt(10);
        const hashPassword=await bcrypt.hash(user.password, saltRound);
        user.password=hashPassword;
    } catch (error) {
        next(error);
    }

});


//compare password

userSchema.methods.comparePassword=async function (enteredPassword) {
    try {
        return await bcrypt.compare(enteredPassword, this.password);
    } catch (error) {
        console.error(error);
    }
};

//json web token 
//1.header=type of token and metadata
//2.payload=claims or statements about entity 
//3.signature=to verify sender
//dont store on server alwayas store on browser or as cookies

userSchema.methods.generateToken=async function () {
   try {
    return jwt.sign({
        userId: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,
    },
    process.env.jwt_secret_key,{
        expiresIn:"30d",
    }
   );
   } catch (error) {
    console.error(error);
   }
};

//define the model or the collection name 

const User=new mongoose.model("User", userSchema);

module.exports=User;